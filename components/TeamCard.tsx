'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import Badge from './Badge';
import Card from './Card';

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  humanDetail?: string;
  headshot: string;
  badges: string[];
  linkedinUrl?: string;
  twitterUrl?: string;
  delay?: number;
}

export default function TeamCard({
  name,
  title,
  bio,
  humanDetail,
  headshot,
  badges,
  linkedinUrl = '#',
  twitterUrl,
  delay = 0,
}: TeamCardProps) {
  return (
    <Card className="h-full flex flex-col" delay={delay}>
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[var(--border)] shadow-md">
            <Image
              src={headshot}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">
            {name}
          </h3>
          <p className="text-sm font-medium text-[var(--muted-foreground)] mb-4">
            {title}
          </p>
        </div>

        <div className="flex-1 mb-6">
          <p className="text-[var(--foreground)] leading-relaxed mb-3">
            {bio}
          </p>
          {humanDetail && (
            <p className="text-sm text-[var(--muted-foreground)] italic leading-relaxed">
              {humanDetail}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {badges.map((badge, index) => (
            <Badge key={index} variant="default">
              {badge}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4 border-t border-[var(--border)]">
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] hover:opacity-80 transition-opacity"
            aria-label={`${name} on LinkedIn`}
          >
            <Image
              src="/Linkedin logo.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </Link>
          {twitterUrl && (
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label={`${name} on Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </Link>
          )}
        </div>
    </Card>
  );
}

