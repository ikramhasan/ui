"use client"

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/registry/ui/combobox"

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-6) Chicago",
      "(GMT-7) Denver",
      "(GMT-8) Los Angeles",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+2) Athens",
      "(GMT+3) Istanbul",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+4) Dubai",
      "(GMT+5:30) Mumbai",
      "(GMT+6) Dhaka",
      "(GMT+8) Singapore",
      "(GMT+9) Tokyo",
      "(GMT+10) Sydney",
    ],
  },
]

export function ComboboxGroups() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              <ComboboxSeparator />
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
