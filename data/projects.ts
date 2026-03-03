export interface Project {
  id: string;
  title: string;
  role: string;
  dates: string;
  summary: string;
  tags: string[];
  details: string[];
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "climbspeed",
    title: "ClimbSpeed",
    role: "Independent Engineer",
    dates: "Aug 2025 – Present",
    summary:
      "Production RAG platform for aviation ground school. Custom ReAct agent, hybrid retrieval, and eval-driven iteration — built end-to-end as a solo project.",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "RAG",
      "ReAct Agent",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://climbspeed.com",
    linkLabel: "climbspeed.com",
    details: [
      "15,000+ lines Python, 6,300+ lines TypeScript, 9 PostgreSQL tables, 3-container Docker architecture.",
      "Custom ReAct agent framework built from scratch — abstract BaseAgent with tool-calling loop, state management, and hook system. Simplified from complex validation agent (78-86% pass) to minimal 2-tool design (93-95% pass).",
      "Hybrid retrieval system combining semantic search (Chroma + SentenceTransformers), BM25 keyword search, and Reciprocal Rank Fusion. BM25 catches regulatory acronyms and CFR citations that semantic search misses.",
      "LLM-as-Judge evaluation pipeline with producer-consumer ThreadPoolExecutor architecture. Benchmark: 4.86/5.0 correctness, 99.6% pass rate, 100% citation compliance across 230 questions.",
      "7-stage passage-grounded question generation pipeline: plan, generate, verify, distractors, dedup, review, insert. ~2,900 questions deployed with 54% first-pass active rate.",
      "Deterministic compute tools (75 unit tests): aviation calculators for groundspeed, crosswind, density altitude, and FAA calendar tools for inspection deadlines and medical validity.",
      "FAA corpus processing: 45+ publications parsed with Docling, sliding-window chunked, dual-indexed for vector and sparse retrieval.",
      "Performance: P50 33s latency, P95 63s. Streaming reduced TTFT by 48%.",
    ],
  },
  {
    id: "jnj",
    title: "J&J CAR-T Manufacturing AI",
    role: "AI and Platform Engineer",
    dates: "Sep 2025 – Present",
    summary:
      "Multi-agent chatbots and data pipelines for Carvykti CAR-T cell therapy manufacturing at Johnson & Johnson.",
    tags: [
      "PySpark",
      "Databricks",
      "Claude",
      "GPT-4o",
      "Delta Lake",
      "Azure",
      "AWS S3",
    ],
    details: [
      "Lentivirus manufacturing quality platform: data pipeline ingesting genealogy, eLIMS, process, and ML predictive data across 17 heterogeneous parquet datasets. Iterative DFS for material genealogy graph construction.",
      "Multi-agent chatbot on J&J's internal AI platform (Flowwise/AMP): Claude 3.5 Sonnet routing agent with custom JavaScript SQL executor. SELECT-only validation, auto LIMIT 1000, 7 queryable tables + 52 ML model metric tables.",
      "CrispML predictive analytics visualization pipeline (~3,920 lines): 52 iterations across 6 rounds, 14 CQA outcomes, 7 model types. Batched Spark operations and S3 path caching reduced jobs from 28+ to 2 per iteration.",
      "Risk management chatbot-as-form: tri-agent system (Intake → Assessment → Wrapup) with 57-record risk register RAG and 5x5 severity/likelihood heatmap scoring.",
      "Chatbot evaluation harness: 5-dimension scoring (correctness, grounding, completeness, tone, safety) with parallel ThreadPoolExecutor evaluation and 6-chart automated reports.",
    ],
  },
  {
    id: "rex",
    title: "REX Voice Assistant",
    role: "Personal Project",
    dates: "2024 – 2025",
    summary:
      "Fully local streaming voice assistant with sub-second perceived latency for hands-free desktop control.",
    tags: ["Python", "Whisper", "FastAPI", "CUDA", "Silero VAD", "asyncio"],
    details: [
      "Dual-mode audio pipeline: standard mode (VAD end-of-speech detection) and low-latency mode (early intent matching on partial transcripts).",
      "Async streaming architecture: 16kHz audio → Silero VAD → Whisper transcription → regex-based intent matching → command execution.",
      "Integrations: Spotify (OAuth), YouTube Music Desktop (companion API), SteelSeries GG Moments (hotkey simulation).",
      "Layered configuration (defaults → user overrides → environment vars) with keyring-based secret storage.",
      "FastAPI metrics dashboard with WebSocket streaming and latency/match-rate tracking.",
      "Packaged as installable CLI tool via pyproject.toml with Windows CUDA/cuDNN path handling.",
    ],
  },
  {
    id: "intron-retention",
    title: "Intron Retention Analysis Pipeline",
    role: "Research — Robin Lee Lab, University of Pittsburgh",
    dates: "2024 – 2025",
    summary:
      "Multi-stage bioinformatics pipeline for intron retention analysis, processing ~300K rows across experimental timepoints.",
    tags: ["Python", "Pandas", "Biopython", "Ensembl API", "Docker"],
    details: [
      "Processes ~300K rows/sheet across 4 experimental timepoints (CTRL, 1HR, 2HR, 4HR).",
      "Pipeline stages: Excel → pickle serialization (~50x load speedup), QC filtering, Ensembl enrichment (batch REST API + BioMart), intron positioning, translation & frame analysis, NMD prediction.",
      "NMD prediction using EJC distance rules: ≥30 aa to intron end, ≥55 aa to next exon junction.",
      "Modular OOP architecture with fluent API (SequenceProcessor class).",
      "Output: multi-sheet Excel workbook with sequence data, classifications, and NMD predictions.",
    ],
  },
  {
    id: "masters-ml",
    title: "Masters ML Projects",
    role: "University of Pittsburgh",
    dates: "2024 – 2025",
    summary:
      "Drug-kinase binding prediction with ESM-2, molecular generation VAE, scalable microscopy classification with distributed GPU training.",
    tags: ["PyTorch", "ESM-2", "XGBoost", "DDP", "TorchScript", "OpenMM"],
    details: [
      "Drug-kinase binding prediction: parallel featurization pipelines (ECFP fingerprints + ESM-2 3B-parameter embeddings) feeding XGBoost regressors. Bayesian HPO via scikit-optimize. Spearman 0.624, ROC AUC 0.759.",
      "SMILES variational autoencoder: GRU encoder/decoder with reparameterization trick, 1024-dim latent space. Character-level SMILES tokenization with OpenBabel augmentation.",
      "Scalable CNN for microscopy phenotype classification: ResNet-34 transfer learning with DDP multi-GPU training (torchrun, NCCL, synchronized BatchNorm). 13-class classification, TorchScript export.",
      "Protein-ligand molecular dynamics: OpenMM with implicit-solvent pre-minimization → explicit TIP3P solvation → NPT equilibration → production trajectory. Multi-GPU CUDA with mixed precision.",
      "Protein embedding vs DMS fitness: per-residue ESM-2 embeddings compared with BLOSUM62 features. Combined RF model achieved R² ~0.73.",
    ],
  },
];
