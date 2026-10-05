#!/bin/sh
# Run python3 audio.py and python3 render.py full first.
# 4 subframes per frame → tmix for motion blur → 60 fps, plus the mixed audio
cd "$(dirname "$0")" && mkdir -p export
ffmpeg -v error -y -framerate 240 -i export/sub/%05d.png -i export/audio.wav \
  -filter_complex "[0:v]tmix=frames=4:weights='1 1 1 1',select='eq(mod(n\,4)\,3)',setpts=N/(60*TB),format=yuv420p[v]" \
  -map "[v]" -map 1:a -r 60 -c:v libx264 -preset slow -crf 14 -tune animation -movflags +faststart \
  -c:a aac -b:a 256k -shortest export/embossed-ui.mp4
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames,duration -of compact export/embossed-ui.mp4
