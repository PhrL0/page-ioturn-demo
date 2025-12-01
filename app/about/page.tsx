"use client";

import { HomepageNav } from "@/components/homepage-nav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock team data - replace with real data later
const teamMembers = [
  {
    id: 1,
    name: "Pedro Henrique Rodrigues Leme",
    role: "Dev FullStack & IOT developer",
    image:
      "/20250531_141414.jpg",
    bio: "Arquiteto de soluções para a Indústria 4.0. Integrando eletrônica e sistemas embarcados com software avançado e inteligência artificial, criando a espinha dorsal da próxima geração de conectividade industrial.",
    technologies: [
      "Node.js",
      "React",
      "Spring Boot",
      "IOT",
      "Eletronic",
      "Industrial Protocols",
      "Docker",
      "Kubernetes",
      "Redis",
      "API RESTful",
      "Machine Learning",
      "Git/Github",
    ],
    linkedin: "https://www.linkedin.com/in/pedroleme11",
    github: "https://github.com/PhrL0",
    whatsapp: "5516997377336", // Added WhatsApp number for each member
  },
  {
    id: 2,
    name: "João Vitor Pinheiro Garcia",
    role: "Dev FullStack ",
    image: "/jvgarcia.jpg",
    bio: "Software Developer especializado em soluções web escaláveis e sistemas backend robustos.",
    technologies: [
      "Spring Boot",
      "FastAPI",
      "Fastify",
      "Docker",
      "React",
      "Node.js",
      "API RESTful",
      "IOT",
      "Git/Github",
    ],
    linkedin: "https://linkedin.com/in/jvpinheiro1",
    github: "https://github.com/jvpinheiro1",
    whatsapp: "5516988655270",
  },
  {
    id: 3,
    name: "Guilherme Andrade Camikado",
    role: "Dev FullStack",
    image: "/guilerme2.jpg",
    bio: "Desenvolvedor atuando no desenvolvimento de soluções web e desktop. Sólida vivência em suporte tecnico e redes.",
    technologies: [
      "Tailwind",
      "bootstrap",
      "Flask",
      "React",
      "Node.js",
      "Git/Github",
      "PyQt",
      "Blender3D",
      "API RESTful",
    ],
    linkedin: "https://linkedin.com/in/guiacamikado",
    github: "https://github.com/guicamikado",
    whatsapp: "5516993282169",
  },
  {
    id: 4,
    name: "João Pedro Perez",
    role: "Dev Front-end",
    image: "/joaoPedro.jpg",
    bio: "Desenvolvedor focado em front-end com React e JavaScript. Experiência em integração de APIs e conhecimentos em SQL e Git/GitHub.",
    technologies: [
      "React",
      "JavaScript",
      "Axios",
      "SQL",
      "MySQL",
      "Git/GitHub",
    ],
    linkedin: "https://www.linkedin.com/in/joaopperez",
    github: "https://github.com/JonPer3z",
    whatsapp: "5516996223625",
  },
  {
    id: 5,
    name: "Mykael Nivaldo Balbino Oliveira",
    role: "Front-End Developer",
    image: "/mykhael.jpg",
    bio: "Desenvolvedor Front-End dedicado à criação de interfaces modernas e fluidas, com foco em desempenho, usabilidade e experiência do usuário.",
    technologies: [
      "React",
      "React Native",
      "Git/Github",
      "Tailwind",
      "MaterialUI",
      "jQuery",
    ],
    linkedin: "https://linkedin.com/in/fernandalima",
    github: "https://github.com/fernandalima",
    whatsapp: "5516994307583",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomepageNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Quem Somos Nós
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
              A equipe que está revolucionando o{" "}
              <span className="text-primary bg-clip-text">
                monitoramento IoT industrial
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Somos um time multidisciplinar de estudantes apaixonados por
              tecnologia e inovação, dedicados a transformar a indústria através
              de soluções IoT inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-4 pb-6 border-b border-border/50">
            <p className="text-base text-foreground leading-relaxed max-w-4xl mx-auto">
              Somos estudantes do{" "}
              <span className="font-semibold text-primary">
                Curso Técnico em Análise e Desenvolvimento de Sistemas
              </span>{" "}
              na{" "}
              <span className="font-semibold text-primary">
                Faculdade de Tecnologia SENAI Antonio Adolpho Lobbe
              </span>
              . Juntos, desenvolvemos o projeto IoTurn como parte de nossa
              formação acadêmica, aplicando conhecimentos de programação, IoT,
              análise de dados e design de sistemas para criar uma solução
              inovadora de monitoramento industrial.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">IoTurn</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 IoTurn. Plataforma de Monitoramento Industrial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  return (
    <Card
      className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={member.github} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm"
            >
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href={`https://wa.me/${
              member.whatsapp
            }?text=Olá%20${encodeURIComponent(
              member.name
            )}!%20Vi%20seu%20perfil%20no%20IoTurn`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-9 w-9 rounded-full shadow-lg backdrop-blur-sm bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-primary/80 mt-1">
            {member.role}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">
          {member.bio}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {member.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
