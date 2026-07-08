import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <Page>
      <Section>
        <Container>
          <p className="text-sm text-neutral-500">
            Blueprint Base is ready.
          </p>
        </Container>
      </Section>
    </Page>
  );
}