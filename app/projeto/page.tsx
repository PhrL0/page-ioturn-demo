"use client"

import { HomepageNav } from "@/components/homepage-nav"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Wifi,
  Database,
  Brain,
  BarChart3,
  Container,
  Radio,
  Server,
  GitBranch,
  Shield,
  X,
  ChevronRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// Define the nodes in our architecture
const architectureNodes = [
  {
    id: "hardware",
    title: "ESP32 Heltec V3",
    category: "Hardware",
    icon: Cpu,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-500",
    description: "Microcontrolador com WiFi e LoRa integrado à PCB customizada",
    details: [
      "Sensores de nível e temperatura do óleo",
      "Medição de corrente do motor principal",
      "Encoder para RPM do eixo árvore",
      "Display Victor Vision para visualização local",
      "Pré-processamento local dos dados",
      "Envio otimizado por delta de mudança",
    ],
    dependencies: ["lora"],
    tech: ["C++", "Arduino IDE", "Edge Computing"],
  },
  {
    id: "lora",
    title: "LoRa P2P",
    category: "Comunicação",
    icon: Radio,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    description: "Transmissão de longo alcance via LoRa Peer-to-Peer",
    details: [
      "Comunicação sem infraestrutura de rede",
      "Alcance de até 5km em campo aberto",
      "Baixo consumo energético",
      "Resistente a interferências industriais"
    ],
    dependencies: ["gateway"],
    tech: ["LoRa", "Radiofrequência"],
  },
  {
    id: "gateway",
    title: "Gateway LoRa",
    category: "Comunicação",
    icon: Wifi,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    description: "Conversão de LoRa para MQTT",
    details: [
      "Recepção de múltiplos dispositivos",
      "Conversão de protocolo LoRa → MQTT",
      "Filtragem e agregação de dados",
      "Envio seguro para o servidor backend",
    ],
    dependencies: ["backend"],
    tech: ["MQTT", "Arduino IDE","HTTP", "WIFI"],
  },
  {
    id: "backend",
    title: "Servidor Backend",
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    description: "Servidor Node.js com Fastify hospedado no SENAI",
    details: [
      "Inscrição em tópicos MQTT",
      "Validação e sanitização de dados",
      "APIs RESTful para consultas",
      "Autenticação e autorização",
      "Server-Sent Events para dados em tempo real",
      "Persistência em PostgreSQL",
    ],
    dependencies: ["postgres", "hermes", "hdbscan"],
    tech: ["Node.js", "Fastify", "TypeScript", "MQTT","SSE", "RedisIO"],
  },
  {
    id: "postgres",
    title: "PostgreSQL",
    category: "Banco de Dados",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-500",
    description: "Banco de dados relacional para persistência",
    details: [
      "Armazenamento de séries temporais",
      "Replicação para alta disponibilidade",

    ],
    dependencies: ["frontend"],
    tech: ["PostgreSQL", "SQL"],
  },
  {
    id: "hermes",
    title: "Hermes AI",
    category: "IA/ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    description: "Agente de IA para conversão de linguagem natural em SQL",
    details: [
      "Processamento de linguagem natural (NLP)",
      "Geração de queries SQL otimizadas",
      "Contexto de conversa persistente",
      "Feedback adaptativo via Thompson Sampling",
    ],
    dependencies: ["thompson", "frontend"],
    tech: ["Python", "NLP", "GeminiAI","FastAPI"],
  },
  {
    id: "thompson",
    title: "Thompson Sampling",
    category: "IA/ML",
    icon: GitBranch,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500",
    description: "Otimização autoadaptativa de hiperparâmetros",
    details: [
      "Algoritmo de bandit multi-armed",
      "Coleta de feedback do usuário",
      "Ajuste dinâmico de parâmetros do Hermes",
      "Balanceamento exploration vs exploitation",
      "Melhoria contínua de performance",
    ],
    dependencies: [],
    tech: ["Python", "NumPy", "SciPy", "FastAPI"],
  },
  {
    id: "hdbscan",
    title: "HDBSCAN",
    category: "IA/ML",
    icon: Shield,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-500",
    description: "Detecção de anomalias por clustering hierárquico",
    details: [
      "Clustering baseado em densidade",
      "Identificação de padrões anormais",
      "Detecção sem supervisão",
      "Adaptação a diferentes escalas",
      "Alertas preditivos de falhas",
    ],
    dependencies: ["frontend"],
    tech: ["Python", "sk-learning", "HDBSCAN","Seaborn", "Matplotlib","Numpy","Pandas"],
  },
  {
    id: "frontend",
    title: "Dashboard React",
    category: "Frontend",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    description: "Interface web moderna e responsiva",
    details: [
      "Gráficos em tempo real com SSE",
      "CRUD completo do sistema",
      "Chat conversacional com Hermes",
      "Dashboard de anomalias e alertas",
      "Interface responsiva mobile-first",
    ],
    dependencies: ["kubernetes"],
    tech: ["React", "Vite", "TailwindCSS", "ApexCharts","MUI"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    category: "Infraestrutura",
    icon: Container,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    description: "Orquestração de containers cloud-native",
    details: [
      "Auto-scaling horizontal de pods",
      "Rolling updates sem downtime",
      "Secrets e ConfigMaps gerenciados",
    ],
    dependencies: [],
    tech: ["Kubernetes", "Docker", "Linux"],
  },
]

// SVG connection lines component
const ConnectionLine = ({ from, to, isActive }: { from: string; to: string; isActive: boolean }) => {
  return (
    <motion.line
      x1="50%"
      y1="50%"
      x2="50%"
      y2="100%"
      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
      strokeWidth={isActive ? "3" : "2"}
      strokeDasharray={isActive ? "0" : "5,5"}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  )
}

export default function ProjetoPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const selectedNodeData = architectureNodes.find((node) => node.id === selectedNode)

  // Get active connections based on hovered or selected node
  const getActiveConnections = () => {
    const activeNode = hoveredNode || selectedNode
    if (!activeNode) return []

    const node = architectureNodes.find((n) => n.id === activeNode)
    if (!node) return []

    const connections: string[] = []

    // Add dependencies (outgoing connections)
    connections.push(...node.dependencies)

    // Add reverse dependencies (incoming connections)
    architectureNodes.forEach((n) => {
      if (n.dependencies.includes(activeNode)) {
        connections.push(n.id)
      }
    })

    return connections
  }

  const activeConnections = getActiveConnections()

  return (
    <div className="min-h-screen bg-background">
      <HomepageNav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="outline" className="mb-4 text-sm">
                Arquitetura IoT End-to-End
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
                IoTurn: Monitoramento Industrial Inteligente
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                Explore a arquitetura completa do sistema IoTurn e entenda como cada componente se conecta para formar
                uma solução inteligente de monitoramento industrial
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Architecture Flow */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Fluxo de Dados Interativo</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Clique em qualquer componente para explorar suas funcionalidades e dependências
              </p>
            </div>

            {/* Interactive Node Graph */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                {architectureNodes.map((node, index) => {
                  const Icon = node.icon
                  const isActive =
                    node.id === selectedNode || node.id === hoveredNode || activeConnections.includes(node.id)

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Connection indicator to dependencies */}
                      {node.dependencies.length > 0 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border">
                          <motion.div
                            className="h-full bg-primary origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{
                              scaleX:
                                isActive && node.dependencies.some((dep) => activeConnections.includes(dep)) ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                          <ChevronRight className="absolute -right-3 -top-2.5 w-5 h-5 text-border" />
                        </div>
                      )}

                      <Card
                        className={`
                          p-6 cursor-pointer transition-all duration-300 h-full
                          ${isActive ? "shadow-lg scale-105 border-primary" : "hover:shadow-md"}
                          ${node.borderColor}
                        `}
                        onClick={() => setSelectedNode(node.id)}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div className="flex flex-col items-center text-center gap-4">
                          <motion.div
                            className={`w-16 h-16 rounded-2xl ${node.bgColor} flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon className={`w-8 h-8 ${node.iconColor}`} />
                          </motion.div>
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {node.category}
                            </Badge>
                            <h3 className="font-bold text-lg mb-2">{node.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{node.description}</p>
                          </div>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 justify-center mt-2">
                            {node.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Data Flow Legend */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm text-muted-foreground">Fluxo de Dados Ativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-border border-dashed" />
                <span className="text-sm text-muted-foreground">Dependências</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedNode && selectedNodeData && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                onClick={() => setSelectedNode(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-50 overflow-hidden"
              >
                <Card className={`h-full overflow-y-auto border-2 ${selectedNodeData.borderColor}`}>
                  <div className={`p-6 bg-gradient-to-r ${selectedNodeData.color}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-background/90 flex items-center justify-center">
                          <selectedNodeData.icon className={`w-8 h-8 ${selectedNodeData.iconColor}`} />
                        </div>
                        <div className="text-white">
                          <Badge variant="secondary" className="mb-2">
                            {selectedNodeData.category}
                          </Badge>
                          <h2 className="text-3xl font-bold">{selectedNodeData.title}</h2>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={() => setSelectedNode(null)}
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-3">Descrição</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedNodeData.description}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-3">Funcionalidades</h3>
                      <ul className="space-y-2">
                        {selectedNodeData.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${selectedNodeData.bgColor} mt-2`} />
                            <span className="text-muted-foreground flex-1">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-3">Tecnologias</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedNodeData.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {selectedNodeData.dependencies.length > 0 && (
                      <div>
                        <h3 className="font-bold text-xl mb-3">Dependências</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedNodeData.dependencies.map((depId) => {
                            const depNode = architectureNodes.find((n) => n.id === depId)
                            if (!depNode) return null
                            const DepIcon = depNode.icon

                            return (
                              <Button
                                key={depId}
                                variant="outline"
                                className="gap-2 bg-transparent"
                                onClick={() => setSelectedNode(depId)}
                              >
                                <DepIcon className={`w-4 h-4 ${depNode.iconColor}`} />
                                {depNode.title}
                              </Button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Tech Stack Summary */}
        <section className="py-20 bg-accent/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stack Tecnológico</h2>
              <p className="text-lg text-muted-foreground">Tecnologias utilizadas no projeto IoTurn</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "ESP32", category: "Hardware" },
                { name: "LoRa", category: "IoT" },
                { name: "Node.js", category: "Backend" },
                { name: "PostgreSQL", category: "Database" },
                { name: "Python", category: "ML" },
                { name: "React", category: "Frontend" },
                { name: "Fastify", category: "Framework" },
                { name: "TypeScript", category: "Language" },
                { name: "Docker", category: "DevOps" },
                { name: "Kubernetes", category: "Orchestration" },
                { name: "MQTT", category: "Protocol" },
                { name: "Vite", category: "Build Tool" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-bold mb-1">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
