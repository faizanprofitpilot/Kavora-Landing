import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col">
              <Link href="/" className="mb-2">
                <Image
                  src="/logo.png"
                  alt="Kavora"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-[var(--muted-foreground)] text-sm mb-2">
                Runtime Governance for Enterprise AI
              </p>
              <p className="text-[var(--muted-foreground)] text-sm">New York, NY</p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <Button href="https://outlook.office.com/book/KavoraRuntimeAIGovernanceIntro@shwatech.com/" variant="primary">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

