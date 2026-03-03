export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  dates: string;
  summary: string;
  tags: string[];
  sections: ProjectSection[];
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
      "Production RAG platform helping student pilots prepare for FAA knowledge tests. Custom agentic framework, hybrid retrieval, and eval-driven development — built end-to-end solo.",
    tags: ["Python", "FastAPI", "Next.js", "React", "RAG", "PostgreSQL", "Docker"],
    link: "https://climbspeed.com",
    linkLabel: "climbspeed.com",
    sections: [
      {
        title: "Why Build From Scratch?",
        content:
          "The first agent prototype used a complex grounded-validation approach with evidence scratchpads and fuzzy matching — it scored 78-86% pass rate. Replacing it with a minimal search + submit tool design scored 93-95%. The LLM was already good at citing; validation layers just added friction. A custom ReAct framework keeps that simplicity: ~300 lines of core loop, no abstraction tax, full control over tool-calling and streaming.",
      },
      {
        title: "Hybrid Retrieval",
        content:
          "Aviation content is dense with exact regulatory references (CFR 91.155, VOR, METAR). Semantic search handles paraphrased questions well but misses exact acronyms that BM25 catches directly. Adding BM25 with 3x weight in Reciprocal Rank Fusion was the single biggest retrieval quality improvement. RRF merges rank positions — not raw scores — sidestepping the calibration problem between cosine similarity and TF-IDF scales entirely.",
      },
      {
        title: "Deterministic Compute Tools",
        content:
          "The alpha audit found three categories of systematic LLM failure: wind triangle math, FAA calendar month conventions, and multi-step regulatory chains. More prompting doesn't fix arithmetic — a calculator does. 9 aviation math functions + 7 FAA deadline functions, all running in a restricted Python sandbox with 75 unit tests covering every audit failure case.",
      },
      {
        title: "Measured Results",
        content:
          "4.86/5.0 correctness, 99.6% pass rate, 100% citation compliance across 230 benchmarked questions. P50 latency 33s, P95 63s. Streaming reduced time-to-first-token by 48%. Every architectural decision has a before/after measurement — round-based search limits alone cut P95 from 118s to 63s while improving quality from 4.73 to 4.82.",
      },
    ],
  },
  {
    id: "jnj",
    title: "J&J CAR-T Manufacturing AI",
    role: "AI and Platform Engineer",
    dates: "Sep 2025 – Present",
    summary:
      "Data pipelines and multi-agent chatbots for Carvykti CAR-T cell therapy lentiviral vector manufacturing at Johnson & Johnson.",
    tags: ["PySpark", "Databricks", "Claude", "Delta Lake", "Azure", "AWS S3"],
    sections: [
      {
        title: "Manufacturing Data Pipeline",
        content:
          "Takes four heterogeneous data sources — genealogy (material lineage), quality (eLIMS release data), process (USP/DSP manufacturing parameters across 17 parquet datasets from two sites), and a ground-truth overview — and produces cohesive JSON files powering an internal Hugo portal plus Delta Lake tables backing the chatbot's SQL interface. Iterative DFS with memoization builds the full recursive input tree for every material in the genealogy graph.",
      },
      {
        title: "Multi-Agent Chatbot",
        content:
          "Built on J&J's internal Flowwise/AMP platform: Claude 3.5 Sonnet routing agent with a custom JavaScript SQL executor. SELECT-only validation with auto LIMIT 1000 prevents runaway queries across 7 queryable tables + 52 ML model metric tables. Natural language to SQL over regulated manufacturing data — the chatbot safely queries production lentivirus batch records.",
      },
      {
        title: "CrispML Visualization Pipeline",
        content:
          "~3,920-line pipeline consuming predictive ML model outputs across 52 iterations, 6 rounds, 14 CQA outcomes, and 7 model types. Generates interactive radar charts, scatter-regression plots, and fishbone diagrams. Batched Spark operations and S3 path caching reduced jobs from 28+ to 2 per iteration. Includes a unified column resolver handling naming inconsistencies across rounds.",
      },
      {
        title: "Risk Management & Evaluation",
        content:
          "Tri-agent chatbot-as-form system (Intake → Assessment → Wrapup) replacing traditional risk intake forms with AI-guided interview flow. 57-record risk register RAG for calibration, CEI statement builder, 5x5 heatmap scoring. Separate evaluation harness benchmarks chatbot quality across 5 dimensions with parallel execution and automated 6-chart reports.",
      },
    ],
  },
  {
    id: "rex",
    title: "REX Voice Assistant",
    role: "Personal Project",
    dates: "2024 – 2025",
    summary:
      "Fully local streaming voice assistant with sub-second perceived latency for hands-free desktop control. Not a demo — a shipped, installable, configurable tool.",
    tags: ["Python", "Whisper", "FastAPI", "CUDA", "Silero VAD", "asyncio"],
    sections: [
      {
        title: "The Differentiator",
        content:
          "Most voice assistant tutorials transcribe after the user stops speaking, have no latency awareness, and aren't packaged or configurable. REX's low-latency mode transcribes partial audio buffers periodically and checks partial transcripts for safe early command matches — executing immediately and clearing the buffer. This reduces perceived latency significantly while consciously controlling the precision/speed tradeoff.",
      },
      {
        title: "Architecture",
        content:
          "All local. No cloud calls. No LLM inference loops. Audio input at 16kHz → Silero VAD for utterance segmentation → faster-whisper/CTranslate2 transcription → regex-based intent matching → command handler execution. Two modes: standard (VAD end-of-speech, high precision) and low-latency (early intent detection on partials, faster response).",
      },
      {
        title: "Real System Integrations",
        content:
          "Spotify (full OAuth flow), YouTube Music Desktop (companion API), SteelSeries GG Moments (hotkey simulation for game clip capture). Layered configuration system (defaults → user overrides → environment vars) with keyring-based secret storage. FastAPI metrics dashboard with WebSocket streaming for latency and match-rate tracking. Packaged as an installable CLI tool with Windows CUDA/cuDNN path handling.",
      },
    ],
  },
  {
    id: "intron-retention",
    title: "Intron Retention Analysis",
    role: "Research — Robin Lee Lab, Pitt",
    dates: "2024 – 2025",
    summary:
      "Bioinformatics pipeline for intron retention analysis in U2OS cells treated with TNF-α, processing ~300K rows across experimental timepoints.",
    tags: ["Python", "Pandas", "Biopython", "Ensembl API", "Docker"],
    sections: [
      {
        title: "The Pipeline",
        content:
          "Consumes IRFinder results and adds biological interpretation. Excel → pickle serialization (~50x load speedup over ~300K rows/sheet) → QC filtering → Ensembl enrichment via batch REST API + BioMart → intron extraction with strand-aware correction → translation and frame analysis → NMD prediction. Four experimental timepoints: CTRL, 1HR, 2HR, 4HR.",
      },
      {
        title: "NMD Prediction",
        content:
          "Predicts nonsense-mediated decay susceptibility using exon junction complex distance rules: ≥30 amino acids to intron end, ≥55 amino acids to next exon junction. Reconstructs intron-retained transcripts, identifies premature termination codons, and classifies coding impact. Output is a multi-sheet Excel workbook with sequence data, classifications, and NMD predictions ready for the lab.",
      },
    ],
  },
  {
    id: "masters-ml",
    title: "Masters ML Projects",
    role: "University of Pittsburgh",
    dates: "2024 – 2025",
    summary:
      "Drug-kinase binding prediction, molecular generation, scalable microscopy classification, and molecular dynamics across four graduate projects.",
    tags: ["PyTorch", "ESM-2", "XGBoost", "DDP", "TorchScript", "OpenMM"],
    sections: [
      {
        title: "Drug-Kinase Binding Prediction",
        content:
          "Built two parallel featurization pipelines: ECFP Morgan fingerprints for ligands and ESM-2 3B-parameter embeddings for proteins, feeding XGBoost regressors with Bayesian HPO via scikit-optimize. ESM-2 embeddings outperformed k-mer features, validating protein language model transfer learning. Independent test: Spearman 0.624, ROC AUC 0.759.",
      },
      {
        title: "SMILES Variational Autoencoder",
        content:
          "GRU encoder/decoder with reparameterization trick over character-level SMILES tokenization. 1024-dimensional latent space. Optional data augmentation via OpenBabel produces randomized non-canonical SMILES (same molecule, different string) to increase training diversity. Decoder exported as TorchScript for dependency-light generation.",
      },
      {
        title: "Scalable Microscopy Classification",
        content:
          "ResNet-34 transfer learning with DDP multi-GPU training (torchrun, NCCL, synchronized BatchNorm) for 13-class microscopy phenotype classification. Full distributed training pipeline with TorchScript model export for deployment.",
      },
      {
        title: "Molecular Dynamics",
        content:
          "Protein-ligand simulations with OpenMM: implicit-solvent pre-minimization → explicit TIP3P solvation → NPT equilibration → production trajectory. Multi-GPU CUDA with mixed precision. Plus protein embedding analysis comparing per-residue ESM-2 embeddings against BLOSUM62 features for DMS fitness prediction (R² ~0.73).",
      },
    ],
  },
];
