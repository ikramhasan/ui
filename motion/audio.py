import numpy as np, os, subprocess, wave
HERE=os.path.dirname(os.path.abspath(__file__))
EXPORT=os.path.join(HERE,'export')
# "Hard Techno" by Arulo, Mixkit Stock Music Free License. Not committed:
# the license doesn't allow redistributing the track, so it's fetched here.
SONG=os.path.join(EXPORT,'hard-techno.mp3')
SONG_URL='https://assets.mixkit.co/music/197/197.mp3'
os.makedirs(EXPORT,exist_ok=True)
if not os.path.exists(SONG):
    subprocess.run(['curl','-fsSL','-A','Mozilla/5.0','-o',SONG,SONG_URL],check=True)
SR=48000; L=28.0; START=16.260  # measured kick attack of the drop downbeat (beat 32)
rng=np.random.default_rng(4)
def load(p,start,dur):
    raw=subprocess.run(['ffmpeg','-v','quiet','-ss',str(start),'-t',str(dur),'-i',p,'-ac','2','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout
    return np.frombuffer(raw,np.float32).reshape(-1,2).copy()
def env(n,attack,decay):
    t=np.arange(n)/SR; return np.minimum(1,t/attack)*np.exp(-t/decay)
def bp(x,lo,hi):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/SR); X[(f<lo)|(f>hi)]=0; return np.fft.irfft(X,len(x))
def click():
    n=int(0.12*SR); t=np.arange(n)/SR; x=np.zeros(n)
    down=bp(rng.standard_normal(n),1800,7000)*env(n,0.0004,0.004)+0.5*np.sin(2*np.pi*2600*t)*env(n,0.0003,0.006)
    up=np.roll(bp(rng.standard_normal(n),2500,8000)*env(n,0.0004,0.003),int(0.065*SR))*0.45
    return (down+up)
def key(h=1.0):
    n=int(0.08*SR); t=np.arange(n)/SR
    return bp(rng.standard_normal(n),1200*h,4500*h)*env(n,0.0006,0.007)+0.35*np.sin(2*np.pi*190*t)*env(n,0.001,0.012)
def enter():
    n=int(0.12*SR); t=np.arange(n)/SR
    return bp(rng.standard_normal(n),900,3800)*env(n,0.0008,0.012)+0.6*np.sin(2*np.pi*140*t)*env(n,0.001,0.025)
def pop():
    n=int(0.12*SR); t=np.arange(n)/SR; f=900+600*(1-np.exp(-t/0.02))
    return np.sin(2*np.pi*np.cumsum(f)/SR)*env(n,0.002,0.035)
def tick():
    n=int(0.03*SR); return bp(rng.standard_normal(n),3500,9000)*env(n,0.0002,0.0025)
b=lambda k:k*1.0
EV=[]
EV+= [(i*0.125,key,0.5) for i in range(15)]                   # terminal typing, 16ths
EV+= [(b(2),enter,0.8),(b(3),pop,0.35)]
for c in [4,5,6,9,10,11,12,13,14,15,16,17,18,21,22,23,24,25,26,27]: EV.append((b(c),click,0.7))
EV+= [(b(5)+k*0.125,key,0.4) for k in range(2,7)]  # composer
EV+= [(b(7),key,0.6),(b(7)+0.25,key,0.4),(b(7)+0.5,key,0.4),(b(8),enter,0.7)]  # ⌘K, query, Enter
EV+= [(b(19),pop,0.3),(b(20),tick,0.5)]
music=load(SONG,START,L+0.5)[:int(L*SR)]
fx=np.zeros(len(music))
for t,fn,g in EV:
    s=fn() if fn is not key else key(0.9+0.2*rng.random())
    s=s/np.abs(s).max()*g
    pk=int(np.argmax(np.abs(s)))                # measured peak of this sound
    i0=int(round(t*SR))-pk                       # so the peak lands on the event
    j=np.arange(len(s))+i0; j%=len(fx)           # wraps, so the loop stays seamless
    np.add.at(fx,j,s)
mix=music*0.82+(fx*0.32)[:,None]
peak=np.abs(mix).max(); mix=mix/max(1,peak/0.97)
pcm=(np.clip(mix,-1,1)*32767).astype('<i2')
with wave.open(os.path.join(EXPORT,'audio.wav'),'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('events',len(EV),'peak',round(float(peak),3),'len',len(mix)/SR)
