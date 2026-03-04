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
  oneLiner: string;
  tags: string[];
  sections: ProjectSection[];
  image?: string;
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
    oneLiner: "99.6% pass rate RAG platform for FAA pilot test prep",
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
          "Aviation content is dense with exact regulatory references (CFR 91.155, VOR, METAR). Semantic search handles paraphrased questions well but misses exact acronyms that BM25 catches directly. Adding BM25 with 2x weight in Reciprocal Rank Fusion was the single biggest retrieval quality improvement. RRF merges rank positions — not raw scores — sidestepping the calibration problem between cosine similarity and TF-IDF scales entirely.",
      },
      {
        title: "Deterministic Compute Tools",
        content:
          "The alpha audit surfaced two categories where LLMs consistently fail: wind triangle math (groundspeed, crosswind components, density altitude) and FAA calendar month conventions for inspection deadlines. More prompting doesn't fix arithmetic — a calculator does. An alpha user group confirmed these gaps, and the fix was straightforward: 9 aviation math functions + 7 FAA deadline functions, all running in a restricted Python sandbox with 75 unit tests covering every audit failure case.",
      },
      {
        title: "Measured Results",
        content:
          "4.86/5.0 correctness, 99.6% pass rate, 100% citation compliance across 230 benchmarked questions. Streaming reduced time-to-first-token by 48%, and every architectural decision has a before/after measurement — round-based search limits alone improved quality from 4.73 to 4.82 while cutting end-to-end latency nearly in half.",
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
    oneLiner: "AI pipelines for CAR-T cell therapy manufacturing at J&J",
    tags: ["PySpark", "Databricks", "Claude", "Delta Lake", "Azure", "AWS S3"],
    sections: [
      {
        title: "Manufacturing Data Pipeline",
        content:
          "Unifies four heterogeneous data sources — material lineage, quality release data, manufacturing process parameters across multiple parquet datasets, and a ground-truth overview — into cohesive outputs powering both an internal portal and Delta Lake tables backing a chatbot's SQL interface. Iterative DFS with memoization builds the full recursive input tree for every material in the genealogy graph.",
      },
      {
        title: "Multi-Agent Chatbot",
        content:
          "Claude-powered routing agent with a custom SQL executor. SELECT-only validation with automatic row limits prevents runaway queries across manufacturing and ML model metric tables. Natural language to SQL over regulated manufacturing data — the chatbot safely queries production batch records while enforcing read-only access controls.",
      },
      {
        title: "ML Visualization Pipeline",
        content:
          "Large-scale PySpark pipeline consuming predictive ML model outputs across dozens of iterations, multiple rounds, and several model types. Generates interactive radar charts, scatter-regression plots, and fishbone diagrams. Batched Spark operations and S3 path caching reduced jobs by over 90% per iteration. Includes a unified column resolver handling naming inconsistencies across data rounds.",
      },
      {
        title: "Risk Management & Evaluation",
        content:
          "Multi-agent chatbot-as-form system replacing traditional risk intake forms with AI-guided interview flow. RAG-calibrated risk scoring with automated heatmap generation. Separate evaluation harness benchmarks chatbot quality across 5 dimensions with parallel execution and automated reporting.",
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
    oneLiner: "Sub-second local voice assistant — no cloud, no latency",
    tags: ["Python", "Whisper", "FastAPI", "CUDA", "Silero VAD", "asyncio"],
    link: "https://github.com/David-Antolick/REX_voice_assistant",
    linkLabel: "GitHub",
    sections: [
      {
        title: "The Differentiator",
        content:
          "Most voice assistant tutorials transcribe after the user stops speaking, have no latency awareness, and aren't packaged or configurable. REX's low-latency mode transcribes partial audio buffers periodically and checks partial transcripts for safe early command matches — executing immediately and clearing the buffer. This reduces perceived latency significantly while consciously controlling the precision/speed tradeoff.",
      },
      {
        title: "Why These Tools",
        content:
          "Every choice optimizes for local-first speed. Silero VAD over WebRTC VAD for better utterance boundary detection. faster-whisper with CTranslate2 over stock Whisper for 4x inference speedup. Regex routing over an intent classifier because command sets are finite and deterministic matching eliminates false positives. No LLM inference loops — avoids hallucination, latency, and cloud dependency entirely.",
      },
      {
        title: "Runs on a Laptop",
        content:
          "The entire pipeline — VAD, transcription, intent matching, command execution — runs on consumer hardware with no cloud calls. CUDA acceleration is optional, not required. Explicit DLL path handling for Windows ensures cuDNN/cuBLAS discoverability without manual environment setup. Packaged as an installable CLI tool with layered config (defaults → user overrides → env vars) and keyring-based secret storage.",
      },
      {
        title: "Real System Integrations",
        content:
          "Spotify (full OAuth flow), YouTube Music Desktop (companion API), SteelSeries GG Moments (hotkey simulation for game clip capture). FastAPI metrics dashboard with WebSocket streaming for latency and match-rate tracking. Two operating modes: standard (VAD end-of-speech, high precision) and low-latency (early intent detection on partials, faster response).",
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
    oneLiner: "Bioinformatics pipeline processing ~300K rows for RNA analysis",
    tags: ["Python", "Pandas", "Biopython", "Ensembl API", "Docker"],
    link: "https://github.com/David-Antolick/intron-retention-analysis",
    linkLabel: "GitHub",
    sections: [
      {
        title: "The Pipeline",
        content:
          "Consumes IRFinder results and adds biological interpretation. Excel → pickle serialization (~50x load speedup over ~300K rows/sheet) → QC filtering → Ensembl enrichment via batch REST API + BioMart → intron extraction with strand-aware correction → translation and frame analysis → NMD prediction. Four experimental timepoints: CTRL, 1HR, 2HR, 4HR.",
      },
      {
        title: "Data Engineering at Scale",
        content:
          "~300K rows per experimental condition across three replicates required real ETL thinking. Pickle-based caching eliminates redundant Excel parsing. Batch Ensembl REST API calls with rate limiting and error handling keep enrichment stable over thousands of gene lookups. Multi-replicate consensus filtering (NaN only if all three replicates fail QC) preserves data while maintaining rigor. Outer-join merge strategy consolidates cross-condition results into a single analyzable dataset.",
      },
      {
        title: "NMD Prediction",
        content:
          "Predicts nonsense-mediated decay susceptibility using exon junction complex distance rules: ≥30 amino acids to intron end, ≥55 amino acids to next exon junction. Reconstructs intron-retained transcripts with strand-aware coordinate conversion, identifies premature termination codons, and classifies coding impact. Output is a multi-sheet Excel workbook with sequence data, classifications, and NMD predictions ready for the lab.",
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
    oneLiner: "Drug binding prediction, molecular generation, distributed training",
    tags: ["PyTorch", "ESM-2", "XGBoost", "DDP", "TorchScript", "OpenMM"],
    link: "https://github.com/David-Antolick/IDG-DREAM-Drug-Kinase-Binding-Prediction-Challenge",
    linkLabel: "GitHub (Drug-Kinase)",
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
