"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/ui/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/ui/item"

type Repository = {
  name: string
  description: string
}

const repositories: Repository[] = [
  { name: "web", description: "Marketing site and docs" },
  { name: "api", description: "Public REST and webhooks" },
  { name: "dashboard", description: "Customer dashboard" },
  { name: "mobile", description: "iOS and Android apps" },
  { name: "infra", description: "Terraform and CI" },
]

export function ComboboxCustom() {
  return (
    <Combobox
      items={repositories}
      itemToStringValue={(repository: Repository) => repository.name}
    >
      <ComboboxInput placeholder="Search repositories..." />
      <ComboboxContent>
        <ComboboxEmpty>No repositories found.</ComboboxEmpty>
        <ComboboxList>
          {(repository: Repository) => (
            <ComboboxItem key={repository.name} value={repository}>
              <Item size="xs" className="p-0">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">
                    {repository.name}
                  </ItemTitle>
                  <ItemDescription>{repository.description}</ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
