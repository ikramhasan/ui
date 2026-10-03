import { FileSpreadsheetIcon, FileTextIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/ui/attachment"
import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { Spinner } from "@/registry/ui/spinner"

export function ProductFiles() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Import products</CardTitle>
        <CardDescription>CSV, Excel or a PDF catalog.</CardDescription>
        <CardAction>
          <Button size="sm" variant="secondary">
            Browse
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Attachment className="w-full">
          <AttachmentMedia>
            <FileSpreadsheetIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>spring-catalog.csv</AttachmentTitle>
            <AttachmentDescription>CSV · 248 rows</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Remove spring-catalog.csv">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment state="uploading" className="w-full">
          <AttachmentMedia>
            <Spinner />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>lookbook.pdf</AttachmentTitle>
            <AttachmentDescription>Uploading · 64%</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Cancel upload">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
        <Attachment state="processing" className="w-full">
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>size-guide.pdf</AttachmentTitle>
            <AttachmentDescription>Reading the document</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </CardContent>
    </Card>
  )
}
