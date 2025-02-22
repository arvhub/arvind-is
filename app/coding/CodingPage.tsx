import React from "react";
import { PageHeader } from "../components/PageHeader";
import GitHubButton from "react-github-btn";
import { TerminalCommand } from "../components/TerminalCommand";

export default function CodingPage() {
  const commands = [
    "gh repo clone arvhub/arvind-is",
    "cd arvind-is",
    "npm install",
    "npm run dev",
  ];

  return (
    <main className="flex flex-col items-center pt-24 pb-4">
      <PageHeader />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-2xl">
            <b>Arvind is</b> building this website 👨🏽‍💻
          </p>
          <GitHubButton
            href="https://github.com/arvhub/arvind-is"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            aria-label="Follow @arvhub on GitHub"
          >
            Follow @arvhub/arvind-is
          </GitHubButton>
        </div>
        <p className="text-center text-2xl">Try it yourself locally:</p>
        <TerminalCommand commands={commands} />
      </div>
    </main>
  );
}
