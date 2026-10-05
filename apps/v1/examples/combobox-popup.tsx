"use client"

import { Button } from "@/registry/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/ui/combobox"

type Region = {
  value: string
  label: string
}

const regions: Region[] = [
  { value: "", label: "Select region" },
  { value: "us-east-1", label: "US East (N. Virginia)" },
  { value: "us-west-2", label: "US West (Oregon)" },
  { value: "eu-west-1", label: "Europe (Ireland)" },
  { value: "eu-central-1", label: "Europe (Frankfurt)" },
  { value: "ap-south-1", label: "Asia Pacific (Mumbai)" },
  { value: "ap-northeast-1", label: "Asia Pacific (Tokyo)" },
  { value: "sa-east-1", label: "South America (São Paulo)" },
]

export function ComboboxPopup() {
  return (
    <Combobox items={regions.slice(1)} defaultValue={regions[0]}>
      <ComboboxTrigger
        render={
          <Button
            variant="secondary"
            className="w-64 justify-between font-normal"
          />
        }
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search" />
        <ComboboxEmpty>No regions found.</ComboboxEmpty>
        <ComboboxList>
          {(region: Region) => (
            <ComboboxItem key={region.value} value={region}>
              {region.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
