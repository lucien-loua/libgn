import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem
} from "@/components/ui/code-block";

export function CodeExampleCard() {
  const steps = [
    {
      title: "1. Installation",
      language: "bash" as BundledLanguage,
      code: "npm install libgn",
    },
    {
      title: "2. Import",
      language: "typescript" as BundledLanguage,
      code: "import libgn from 'libgn'",
    },
    {
      title: "3. Utilisation",
      language: "typescript" as BundledLanguage,
      code: `// Obtenir toutes les régions
console.log(libgn.allRegionNames)

// Rechercher une région
const population = libgn.getRegionPopulation('Conakry')
const prefectures = libgn.getPrefecturesByRegion('Conakry')

// Obtenir les informations d'une préfecture
const region = libgn.getRegionOfPrefecture('Kindia')
const subPrefectures = libgn.getSubPrefecturesByPrefecture('Kindia')`,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Utilisation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step) => (
          <div key={step.title}>
            <p className="text-sm text-muted-foreground mb-2">{step.title}</p>
            <CodeBlock
              data={[
                {
                  language: step.language,
                  filename: step.language === "bash" ? "script.sh" : "index.ts",
                  code: step.code,
                },
              ]}
              defaultValue={step.language}
            >
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton />
              </CodeBlockHeader>
              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent
                      language={item.language}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
