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
    role: "Founder & Sole Engineer",
    dates: "2025 to Present",
    summary:
      "Production RAG platform helping student pilots prepare for FAA knowledge tests. Built end-to-end solo, launched April 2026, now live with real student pilots and adopted as curriculum at two flight schools. Custom agentic framework, hybrid retrieval, eval-driven development, a misconception-complete quiz pipeline, and full commercial infrastructure.",
    oneLiner: "Launched RAG platform for FAA pilot prep, live with student pilots",
    tags: ["Python", "FastAPI", "Next.js", "React", "RAG", "PostgreSQL", "Chroma", "Stripe", "Docker"],
    link: "https://climbspeed.com",
    linkLabel: "climbspeed.com",
    sections: [
      {
        title: "Why Build From Scratch?",
        content:
          "The first agent prototype used a complex grounded-validation approach with evidence scratchpads and fuzzy matching. It scored 78-86% pass rate. Replacing it with a minimal search + submit tool design scored 93-95%. The LLM was already good at citing; validation layers just added friction. A custom ReAct framework keeps that simplicity: ~300 lines of core loop, no abstraction tax, full control over tool-calling and streaming.",
      },
      {
        title: "Hybrid Retrieval",
        content:
          "Aviation content is dense with exact regulatory references (CFR 91.155, VOR, METAR). Semantic search handles paraphrased questions well but misses exact acronyms that BM25 catches directly. Adding BM25 with 2x weight in Reciprocal Rank Fusion was the single biggest retrieval quality improvement. RRF merges rank positions, not raw scores, sidestepping the calibration problem between cosine similarity and TF-IDF scales entirely.",
      },
      {
        title: "Deterministic Compute Tools",
        content:
          "The alpha audit surfaced two categories where LLMs consistently fail: wind triangle math (groundspeed, crosswind components, density altitude) and FAA calendar month conventions for inspection deadlines. More prompting doesn't fix arithmetic, but a calculator does. An alpha user group confirmed these gaps, and the fix was straightforward: 9 aviation math functions + 7 FAA deadline functions, all running in a restricted Python sandbox with 75 unit tests covering every audit failure case.",
      },
      {
        title: "Misconception-Complete Quiz Pipeline",
        content:
          "The live question bank (~4,700 active questions across Private and Instrument exams) is generated offline by a V5 pipeline built on a 41.6K-node concept graph with 69K extracted misconceptions. Each misconception is a complete question spec: the wrong belief becomes the distractor, the correct fact becomes the answer. One LLM call formats the question, then an independent RAG agent must answer it blind with no key, which catches ambiguity before anything reaches students. 70-78% yield at ~45s per question, up from 40-54% in prior versions. Design grounded in six peer-reviewed papers.",
      },
      {
        title: "Measured Results",
        content:
          "4.86/5.0 correctness, 99.6% pass rate, 100% citation compliance across 230 benchmarked questions. Streaming reduced time-to-first-token by 48%, and every architectural decision has a before/after measurement. Round-based search limits alone improved quality from 4.73 to 4.82 while cutting end-to-end latency nearly in half.",
      },
      {
        title: "Shipped to Production",
        content:
          "Not a prototype: ~29,000 lines of Python and ~11,900 of TypeScript across a 3-container Docker deployment, launched April 2026. Full commercial stack with Stripe Checkout across four subscription tiers, Google OAuth, an admin-reviewed CFI verification workflow, GDPR/CCPA self-service account deletion, and a public interactive demo subdomain behind four layers of bot defense. Live with real student pilots and adopted as curriculum at two flight schools.",
      },
    ],
  },
  {
    id: "jnj",
    title: "J&J Manufacturing & Quality AI",
    role: "AI & Platform Engineer",
    dates: "2025 to Present",
    summary:
      "Production agentic chatbots, PySpark data pipelines, and LLM evaluation harnesses across Johnson & Johnson's pharmaceutical manufacturing and quality organizations, spanning Carvykti CAR-T lentiviral vector manufacturing, IMQ risk intake, and CQ non-conformance signal analytics.",
    oneLiner: "Agentic chatbots, data pipelines & eval harnesses across J&J quality",
    tags: ["PySpark", "Databricks", "Delta Lake", "LangGraph", "Claude", "GPT-5", "Flowwise/AMP", "Azure", "AWS"],
    sections: [
      {
        title: "Carvykti Manufacturing Data Platform",
        content:
          "A PySpark platform on Databricks for Carvykti CAR-T lentiviral vector manufacturing. Ingests 17 heterogeneous parquet datasets across two manufacturing sites from Azure Blob Storage, normalizes schema conflicts with unionByName, and builds a material genealogy graph via memoized iterative DFS, producing four structured JSON layers plus seven curated Delta Lake tables. A separate ~4,600-line CrispML pipeline turns predictive ML outputs (52 iterations across 6 rounds, 14 CQA outcomes, 8 model types) into radar, scatter-regression, and fishbone visualizations served through a Hugo portal.",
      },
      {
        title: "Lentivirus Manufacturing Chatbot",
        content:
          "A multi-agent Flowwise chatbot on J&J's internal AMP platform lets scientists query manufacturing data in natural language. A Claude 3.5 Sonnet routing agent encodes domain knowledge (batch patterns, CQA names, process terminology) and hands off to a custom JavaScript SQL executor against a Databricks SQL warehouse, with SELECT-only allowlisting, automatic LIMIT 1000, conversation memory, and warehouse cold-start handling. An automated eval harness scores chatbot quality across five dimensions with parallel execution and chart reporting.",
      },
      {
        title: "Phase Future Risk Advisor",
        content:
          "A tri-agent conversational system that replaces J&J IMQ's manual risk-register intake with an AI-guided interview: Intake, Assessment, and Wrapup agents under a forward-only router walk a user through risk identification, CEI statement assembly, severity/likelihood scoring against a 5x5 heatmap, and mitigation planning. Grounded in a 57-record risk register (52 embedded for retrieval, 5 held out for evaluation). The live model was chosen empirically, settling on Claude 4.5 Sonnet after GPT-4o-mini and Claude 3.7 hallucinated. A ~1,960-line LLM-as-judge harness scores runs across deterministic behavioral checks, a 15-field weighted comparison, and a 6-dimension rubric. Deployed as a POC and exercised by real IMQ users.",
      },
      {
        title: "CQ Signal Chatbot Rebuild",
        content:
          "An architecture-complete rebuild of a natural-language Q&A chatbot over non-conformance signal data, replacing a fragile 16-node Flowwise pipeline (which failed by agent proliferation) with a single LangGraph create_react_agent on GPT-5 via J&J's GenAI Platform. A hardened SQL tool layer uses sqlglot to enforce SELECT-only parsing, auto-injects LIMIT, and runs read-only. The defining data insight: the source table is multi-row per non-conformance, so every count must use COUNT(DISTINCT nc_number) — threaded through the system prompt and a deliberately COUNT(*)-failing eval case. Includes a curated Databricks view design and a CI-gated golden-set eval suite.",
      },
      {
        title: "AMP Platform Enablement",
        content:
          "Beyond shipping flows, served as the team's day-to-day AMP/Flowwise SME: authored beginner-safe onboarding tutorials, trained colleagues hands-on through their first agent builds, ran an Amazon Bedrock discovery (nine runnable examples covering the Converse API, Flows, tool use, and the Strands + AgentCore managed-agent stack with documented IAM gotchas), and established the canonical common_ai repo standard that new AI projects start from.",
      },
    ],
  },
  {
    id: "rex",
    title: "REX Voice Assistant",
    role: "Personal Project",
    dates: "2025 to Present",
    summary:
      "Local-first streaming voice assistant for hands-free desktop control. Wake-word gated, on-device speech recognition, and a slot-routed action registry that dispatches deterministic voice commands to real desktop apps. Shipped as an installable PyPI tool with a PySide6 tray UI.",
    oneLiner: "Wake-word desktop voice assistant, local-first, shipped on PyPI",
    tags: ["Python", "faster-whisper", "openWakeWord", "Silero VAD", "PySide6", "asyncio", "CUDA"],
    link: "https://github.com/David-Antolick/REX_voice_assistant",
    linkLabel: "GitHub",
    sections: [
      {
        title: "Declarative Action Registry",
        content:
          "The core architectural rework: every command is an @action-decorated wrapper that registers a frozen ActionSpec at import time, carrying its regex patterns, backend, transport, and planner-ready metadata. Slot-based routing means at most one backend owns each mutually-exclusive category (one music source active at a time), and the matcher recompiles its dispatch table on a backend swap so only active patterns are ever matched. Adding an integration is a pure addition — one new file plus one import line, with the matcher and dispatcher untouched. ~44 actions across six backends.",
      },
      {
        title: "Wake Word & Early-Match Latency",
        content:
          "REX is wake-gated by default with a custom hey_rex ONNX model (openWakeWord, auto-downloaded from Hugging Face). Its default low-latency mode re-transcribes the growing speech buffer every ~200ms and fires a command the moment a safe match appears, then clears the buffer. Variable-argument or ambiguous commands carry a no_early_match flag and wait for the full utterance, so an early fragment can never execute the wrong value. The policy is declared per command on its spec, not hardcoded in the VAD.",
      },
      {
        title: "Real Desktop Integrations",
        content:
          "Each backend is a real desktop integration with its own auth and error model: YouTube Music Desktop (local companion server), Spotify (Web API + OAuth + Connect), SteelSeries GG Moments clipping (GameSense), and layered app launch/close that resolves install locations via hardcoded paths, Start-menu shortcut scanning, and the Windows installed-apps catalog. The most involved is REX's own YTVD fork — a custom Electron build hosting YouTube video and music in one window — driven by voice across new playback and video companion-server namespaces.",
      },
      {
        title: "Engineering Discipline",
        content:
          "A streaming asyncio pipeline with bounded-queue backpressure, blocking Whisper/VAD inference offloaded to executors, and per-session observability (match rate, suppressed counter, p50/p95 end-to-end latency, GPU telemetry via NVML). A CI-blocking test gate asserts registry correctness and hard microsecond ceilings on the dispatch hot path. Hard-won Windows lessons are encoded in code: coercing localhost to 127.0.0.1 to dodge a ~2s IPv6 fallback, and explicit cuDNN/cuBLAS DLL discovery with CPU fallback. Shipped on PyPI with a setup wizard, keyring secrets, and a PySide6 system-tray UI.",
      },
    ],
  },
  {
    id: "intron-retention",
    title: "Intron Retention Analysis",
    role: "Research, Robin Lee Lab, Pitt",
    dates: "2024 to 2025",
    summary:
      "Bioinformatics pipeline for intron retention analysis in U2OS cells treated with TNF-\u03B1, processing ~300K rows across experimental timepoints.",
    oneLiner: "Bioinformatics pipeline processing ~300K rows for RNA analysis",
    tags: ["Python", "Pandas", "Biopython", "Ensembl API", "Docker"],
    link: "https://github.com/David-Antolick/intron-retention-analysis",
    linkLabel: "GitHub",
    sections: [
      {
        title: "The Pipeline",
        content:
          "Consumes IRFinder results and adds biological interpretation. Excel to pickle serialization (~50x load speedup over ~300K rows/sheet), then QC filtering, Ensembl enrichment via batch REST API + BioMart, intron extraction with strand-aware correction, translation and frame analysis, and NMD prediction. Four experimental timepoints: CTRL, 1HR, 2HR, 4HR.",
      },
      {
        title: "Data Engineering at Scale",
        content:
          "~300K rows per experimental condition across three replicates required real ETL thinking. Pickle-based caching eliminates redundant Excel parsing. Batch Ensembl REST API calls with rate limiting and error handling keep enrichment stable over thousands of gene lookups. Multi-replicate consensus filtering (NaN only if all three replicates fail QC) preserves data while maintaining rigor. Outer-join merge strategy consolidates cross-condition results into a single analyzable dataset.",
      },
      {
        title: "NMD Prediction",
        content:
          "Predicts nonsense-mediated decay susceptibility using exon junction complex distance rules: at least 30 amino acids to intron end, at least 55 amino acids to next exon junction. Reconstructs intron-retained transcripts with strand-aware coordinate conversion, identifies premature termination codons, and classifies coding impact. Output is a multi-sheet Excel workbook with sequence data, classifications, and NMD predictions ready for the lab.",
      },
    ],
  },
  {
    id: "masters-ml",
    title: "Masters ML Projects",
    role: "University of Pittsburgh",
    dates: "2024 to 2025",
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
          "Protein-ligand simulations with OpenMM: implicit-solvent pre-minimization, then explicit TIP3P solvation, NPT equilibration, and production trajectory. Multi-GPU CUDA with mixed precision. Plus protein embedding analysis comparing per-residue ESM-2 embeddings against BLOSUM62 features for DMS fitness prediction (R\u00B2 ~0.73).",
      },
    ],
  },
];
