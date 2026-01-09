'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import TeamCard from '@/components/TeamCard';
import {
  AlertTriangle,
  Shield,
  Lock,
  Code,
  FileText,
  Zap,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Briefcase,
  Network,
  Activity,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* The Problem Section */}
      <Section id="problem" variant="muted" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              The Problem
            </h2>
            <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-4 max-w-3xl mx-auto">
              AI governance today is mostly advisory.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-[var(--muted-foreground)] mb-6">
                Enterprises face growing risk from:
              </p>
              <Card>
                <ul className="space-y-4">
                  {[
                    'Internal AI agents acting without clear execution boundaries',
                    'Vendor-hosted AI systems outside direct control',
                    'No unified way to enforce which models, tools, or services AI can access',
                    'Incomplete auditability when legal, security, or regulators ask what happened',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--foreground)]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-[var(--foreground)] font-semibold mt-8"
              >
                Policies exist. Enforcement does not.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-auto rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="/The problem visual.png"
                alt="The Problem - AI Governance Challenges"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* What Kavora Does Section */}
      <Section id="product" variant="image" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              What Kavora Does
            </h2>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto drop-shadow-md">
              Kavora provides a runtime enforcement layer for AI execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-white/90 mb-6 drop-shadow-md">
                Instead of relying on frameworks, SDKs, or developer discipline, Kavora governs AI systems at the execution and egress layer, where real risk occurs.
              </p>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <p className="text-lg text-white mb-6 font-medium drop-shadow-md">
                  With Kavora, organizations can:
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, text: 'Enforce which models and tools AI systems are allowed to use' },
                    { icon: Lock, text: 'Govern AI behavior across internal and third-party environments' },
                    { icon: Code, text: 'Apply centralized policy at runtime without rewriting agent code' },
                    { icon: FileText, text: 'Maintain a complete audit trail of AI execution paths' },
                    { icon: Zap, text: 'Confidently shut off or restrict AI behavior when risk changes' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Icon className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white drop-shadow-sm">{item.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </Card>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-white mt-8 drop-shadow-md"
              >
                Kavora treats AI like any other critical workload: governed, observable, and controllable.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-auto rounded-3xl overflow-hidden shadow-lg border border-white/20"
            >
              <Image
                src="/What kavora does visual.png"
                alt="What Kavora Does - Runtime Enforcement Layer"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" variant="muted" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              How It Works
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] mb-6 italic">
              (Conceptually)
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-[var(--foreground)] mb-6 text-center">
                Kavora inserts a governed control plane between AI systems and the resources they interact with.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    step: '1',
                    icon: Network,
                    title: 'Controlled boundary',
                    description: 'AI agents operate within a controlled execution boundary',
                  },
                  {
                    step: '2',
                    icon: Shield,
                    title: 'Policy mediation',
                    description: 'Outbound calls to models, tools, and services are mediated by policy',
                  },
                  {
                    step: '3',
                    icon: FileText,
                    title: 'Audit + investigation',
                    description: 'All activity is logged for audit, investigation, and compliance',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card variant="feature" delay={index * 0.1}>
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-[var(--primary)] mb-1">
                              STEP {item.step}
                            </div>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[var(--muted-foreground)]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              <Card className="mb-6">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-[var(--foreground)]">
                    Unauthorized actions are blocked or safely degraded
                  </p>
                </div>
              </Card>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-[var(--foreground)] text-center"
              >
                This approach mirrors how network security evolved from guidelines to firewalls.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Why This Matters Now Section */}
      <Section id="why-now" variant="image" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Why This Matters Now
            </h2>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto drop-shadow-md">
              AI systems are moving from decision support to autonomous execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-white/90 mb-6 drop-shadow-md">
                That shift creates new enterprise risk:
              </p>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <ul className="space-y-4">
                  {[
                    'Execution without approval',
                    'Data movement without visibility',
                    'Vendor AI without enforceable constraints',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <AlertTriangle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white mt-8 drop-shadow-md"
              >
                Organizations need governance that works after deployment, not just before.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-auto rounded-3xl overflow-hidden shadow-lg border border-white/20"
            >
              <Image
                src="/Why this matters now visual.png"
                alt="Why This Matters Now - AI Execution Risks"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Who Kavora Is For Section */}
      <Section id="who-its-for" variant="muted" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Who Kavora Is For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="space-y-4">
                  {[
                    { icon: Building2, text: 'CIOs responsible for enterprise AI strategy' },
                    { icon: Shield, text: 'CISOs managing AI-driven risk' },
                    { icon: Target, text: 'Responsible AI and governance leaders' },
                    { icon: Users, text: 'Security and platform teams supporting AI adoption' },
                    { icon: Briefcase, text: 'Enterprises deploying internal agents or vendor-hosted AI' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Icon className="w-5 h-5 text-[var(--primary)] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--foreground)]">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-auto rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="/Who Kavora is for visual.png"
                alt="Who Kavora Is For - Enterprise AI Leaders"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Our Philosophy Section */}
      <Section variant="image" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Philosophy
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <ul className="space-y-4 mb-6">
                {[
                  'Governance should be enforceable, not aspirational',
                  'Runtime control beats static review',
                  'Visibility comes before deep inspection',
                  'Enterprises should retain control without slowing innovation',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Eye className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white mt-8 text-center max-w-3xl mx-auto drop-shadow-md"
            >
              Kavora is designed to start lightweight and scale enforcement as trust and requirements mature.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section id="team" variant="muted" withDivider className="scroll-mt-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Team
            </h2>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Built by operators who've lived both security infrastructure and real-world AI deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TeamCard
              name="Christian Holslin"
              title="Co-founder"
              bio="Christian is a systems and security-focused technologist with three decades of experience building and operating servers, services, and applications across and beyond the Microsoft ecosystem. He founded ShwaTech LLC in New York City in 2024 to expand the reach of his technical expertise and to create opportunity for aspiring engineers in Hunza, northern Pakistan. Christian leads Kavora's architecture and enforcement-layer design."
              humanDetail="His work is shaped by time spent in northern Pakistan, where he saw world-class talent emerging in highly remote conditions."
              headshot="/Christian headshot.png"
              badges={['Systems Architecture', 'Security Engineering', 'Microsoft Stack']}
              linkedinUrl="https://www.linkedin.com/in/christian-holslin-a4a15b1/"
              delay={0}
            />
            <TeamCard
              name="Faizan Muhammad"
              title="Co-founder"
              bio="Faizan is a product and go-to-market founder with a background in equity research and building AI-native SaaS products. He founded EchoSync AI, an AI-powered review marketing platform acquired in 2025, and previously led fundraising and growth at Eucalyptus Labs, scaling from zero to over 500,000 active devices. With five years of equity research experience at Seeking Alpha, he brings analytical rigor to enterprise customer discovery. At Kavora, he leads GTM and product strategy."
              humanDetail="His approach to product-market fit is informed by years of analyzing how markets validate enterprise software adoption cycles."
              headshot="/Faizan headshot.png"
              badges={['Enterprise GTM', 'Product Strategy', 'AI-native SaaS']}
              linkedinUrl="https://www.linkedin.com/in/faizan-muhammad-973190108/"
              delay={0.2}
            />
          </div>
        </Container>
      </Section>

      {/* Status Section */}
      <Section id="status" variant="muted" withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Status
            </h2>
            <p className="text-lg md:text-xl text-[var(--foreground)] mb-4 max-w-3xl mx-auto">
              Kavora is currently working with early enterprise design partners.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              We are validating runtime governance approaches across:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border-2 border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-blue-50/50 p-8 md:p-12 shadow-lg shadow-[var(--primary)]/10"
            >
              <div className="flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-[var(--primary)] mr-3" />
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  Active Development
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Internal AI agents',
                  'Vendor-hosted AI systems',
                  'Secure enterprise environments',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mr-3 flex-shrink-0" />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section withDivider>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Interested in governing AI at runtime?
            </h2>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-8">
              We are scheduling conversations with enterprise leaders exploring AI governance, security, and responsible deployment.
            </p>
            <Button href="https://outlook.office.com/book/KavoraRuntimeAIGovernanceIntro@shwatech.com/" variant="primary">
              Talk to Sales
            </Button>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
