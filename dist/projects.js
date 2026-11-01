window.PROJECTS = [
  {
    "id": "protomire",
    "name": "Protomire",
    "kind": "github",
    "tag": "MODEL DEVELOPMENT",
    "description": "A dedicated IDE for the complete model lifecycle, built on Code – OSS.",
    "detail": "Organize research, datasets, recipes, training, evaluation, and exports in one model project. Includes a native MCP server and shared operations for humans and agents. In development; the repository documents acceptance and packaging status.",
    "url": "https://github.com/greghavens/protomire"
  },
  {
    "id": "triggerfish",
    "name": "Triggerfish",
    "kind": "github",
    "tag": "AI AGENT PLATFORM",
    "description": "A multi-channel agent platform with policy enforcement below the LLM layer.",
    "detail": "Connect agents to messaging channels and multiple model providers. A deterministic policy engine, classification gates, taint tracking, and audit logs govern how information flows. The Reef supplies skills and plugins.",
    "url": "https://github.com/greghavens/triggerfish"
  },
  {
    "id": "moonshiner",
    "name": "Moonshiner",
    "kind": "github",
    "tag": "TRAINING DATA",
    "description": "From seed tasks to judged model traces and training-ready datasets.",
    "detail": "Author seeds, generate trajectories, judge the results, retry rejected traces, and publish accepted data to Hugging Face. Independent queues handle authoring, tracing, review, formatting, and publication.",
    "url": "https://github.com/greghavens/moonshiner"
  },
  {
    "id": "vcf-9-x-skills",
    "name": "VCF Agent Skills",
    "kind": "github",
    "tag": "VMWARE CLOUD FOUNDATION",
    "description": "28 version-aware agent skills for VCF 9.0, 9.1, and 9.1.1.",
    "detail": "Ready-to-install skills for Windsurf, Claude, Codex, Triggerfish, and OpenClaw. Covers VMware infrastructure and documented Dell integrations, with version-scoped references and source citations.",
    "url": "https://github.com/greghavens/vcf-9-x-skills"
  },
  {
    "id": "fabletron",
    "name": "Fabletron",
    "kind": "github",
    "tag": "MODEL & EVALUATION",
    "description": "A Nemotron fine-tune for agentic coding and tool use, with evaluation tooling.",
    "detail": "QLoRA training on Fable-5 traces, a delta-versus-base evaluation harness, and conversion assets for published model formats. Includes MLX resources for Apple Silicon and serving paths for Linux.",
    "url": "https://github.com/greghavens/fabletron"
  },
  {
    "id": "jev-graph-builder",
    "name": "Jev Graph Builder",
    "kind": "github",
    "tag": "KNOWLEDGE GRAPHS",
    "description": "Turn documents into a searchable knowledge graph with checked relationships.",
    "detail": "A coding agent proposes extractions and summaries; Jev evaluates them before ingestion. PostgreSQL and pgvector power retrieval, with an MCP server for assistants and exports for training data.",
    "url": "https://github.com/greghavens/jev-graph-builder"
  },
  {
    "id": "jev-no-bullshit",
    "name": "Jev No Bullshit",
    "kind": "github",
    "tag": "AGENT RELIABILITY",
    "description": "Check an assistant’s final claims against the work it actually performed.",
    "detail": "Flags unverified claims, weasel words, and omissions of failures. Uses TypeSafe’s Jev and integrates with Claude Code, Codex, pi, and OpenCode to request a grounded correction.",
    "url": "https://github.com/greghavens/jev-no-bullshit"
  },
  {
    "id": "jev-scope-control",
    "name": "Jev Scope Control",
    "kind": "github",
    "tag": "AGENT GUARDRAILS",
    "description": "Check whether a proposed tool call stays within the agreed scope.",
    "detail": "A PreToolUse hook asks Jev whether the call matches what the user requested or agreed to. Out-of-scope calls are denied with a reason. The repository contains integrations, examples, and tests.",
    "url": "https://github.com/greghavens/jev-scope-control"
  },
  {
    "id": "reef-registry",
    "name": "The Reef",
    "kind": "github",
    "tag": "SKILLS & PLUGINS",
    "description": "The public skill and plugin registry for Triggerfish.",
    "detail": "A static catalog served through GitHub Pages. Contributions are submitted as pull requests, validated, and published as JSON indexes for discovery by Triggerfish.",
    "url": "https://github.com/greghavens/reef-registry"
  },
  {
    "id": "triggerfish-cms-auth",
    "name": "Triggerfish CMS Auth",
    "kind": "github",
    "tag": "WEB INFRASTRUCTURE",
    "description": "GitHub OAuth endpoints for Decap CMS on Cloudflare Pages.",
    "detail": "Provides the authentication bridge needed when hosting Decap CMS outside Netlify. Adapted from community OAuth work, with Cloudflare Functions endpoints and starter CMS configuration.",
    "url": "https://github.com/greghavens/triggerfish-cms-auth"
  },
  {
    "id": "tq_data_requirements",
    "name": "ESXi Data Collection",
    "kind": "github",
    "tag": "INFRASTRUCTURE",
    "description": "Collect hardware and configuration details from ESXi hosts over SSH.",
    "detail": "A PowerShell script using VMware PowerCLI and Posh-SSH. Supports concurrent collection, retries, resumable inventory, and optional SSH-state preservation, with CSV output.",
    "url": "https://github.com/greghavens/tq_data_requirements"
  },
  {
    "id": "fabletron-nemotron-3-super-120b",
    "name": "Fabletron · LoRA",
    "kind": "model",
    "tag": "PEFT ADAPTER",
    "description": "The fine-tuning adapter behind the Fabletron model family.",
    "detail": "A QLoRA delta for Nemotron-3-Super-120B-A12B trained on the pi_agent split of Fable-5 traces. Apply it to the base model or explore the merged formats. Upstream model and dataset license conditions apply.",
    "url": "https://huggingface.co/greghavens/fabletron-nemotron-3-super-120b"
  },
  {
    "id": "fabletron-nemotron-3-super-120b-GGUF",
    "name": "Fabletron · GGUF",
    "kind": "model",
    "tag": "LLAMA.CPP / LM STUDIO",
    "description": "A GGUF export for running Fabletron with compatible local runtimes.",
    "detail": "The Q4_K_M build packages the merged fine-tune for llama.cpp and LM Studio. Requires a runtime that supports the Nemotron hybrid architecture; the model card includes evaluation results and requirements.",
    "url": "https://huggingface.co/greghavens/fabletron-nemotron-3-super-120b-GGUF"
  },
  {
    "id": "fabletron-nemotron-3-super-120b-NVFP4",
    "name": "Fabletron · NVFP4",
    "kind": "model",
    "tag": "NVIDIA BLACKWELL",
    "description": "Fabletron in NVIDIA ModelOpt FP4 format for Blackwell serving.",
    "detail": "Designed for the vLLM / TensorRT-LLM serving path. The model card provides the verified vLLM configuration, runtime details, and evaluation comparisons.",
    "url": "https://huggingface.co/greghavens/fabletron-nemotron-3-super-120b-NVFP4"
  },
  {
    "id": "fabletron-nemotron-3-super-120b-MLX-4bit",
    "name": "Fabletron · MLX",
    "kind": "model",
    "tag": "APPLE SILICON",
    "description": "A four-bit MLX export of Fabletron for Apple Silicon workflows.",
    "detail": "A quantized export for mlx-lm. Check the model card and source repository for architecture support, available patches, and memory requirements before running it.",
    "url": "https://huggingface.co/greghavens/fabletron-nemotron-3-super-120b-MLX-4bit"
  },
  {
    "id": "fabletron-nemotron-3-super-120b-BF16",
    "name": "Fabletron · BF16",
    "kind": "model",
    "tag": "MERGED WEIGHTS",
    "description": "The full-precision merged model behind the quantized Fabletron exports.",
    "detail": "The LoRA delta merged into Nemotron-3-Super-120B-A12B, in BF16 for Transformers. This is the reference master used to produce the GGUF, NVFP4, and MLX variants.",
    "url": "https://huggingface.co/greghavens/fabletron-nemotron-3-super-120b-BF16"
  },
  {
    "id": "Qwen3.8-27B-bnb-4bit",
    "name": "Qwen3.8 27B · NF4",
    "kind": "model",
    "tag": "BITSANDBYTES",
    "description": "Four-bit Qwen weights for Transformers and QLoRA fine-tuning.",
    "detail": "Quantizes language-model linear layers while preserving the vision tower, embeddings, and output head in BF16. Includes the MTP weights; the model card documents measured tradeoffs and runtime limits. This is a quantization of Qwen’s model, not an original base model.",
    "url": "https://huggingface.co/greghavens/Qwen3.8-27B-bnb-4bit"
  },
  {
    "id": "nemotron-3-super-120b-bnb-4bit",
    "name": "Nemotron 120B · NF4",
    "kind": "model",
    "tag": "BITSANDBYTES",
    "description": "A pre-quantized NF4 build of NVIDIA Nemotron 3 Super.",
    "detail": "Four-bit bitsandbytes weights with BF16 quantization storage for FSDP compatibility. The model card explains component precision choices and the shard-by-shard conversion process. Inherits the base model license.",
    "url": "https://huggingface.co/greghavens/nemotron-3-super-120b-bnb-4bit"
  },
  {
    "id": "gpt-5.6-sol-coding-and-debugging-traces",
    "name": "GPT-5.6 Sol Traces",
    "kind": "dataset",
    "tag": "AGENT TRAJECTORIES",
    "description": "Coding, debugging, review, and defensive-security trajectories from Codex.",
    "detail": "Captures the observable development loop: repository inspection, edits, tests, corrections, and verification. Includes independent judging and seed-authoring trajectories, organized as cumulative next-step training examples.",
    "url": "https://huggingface.co/datasets/greghavens/gpt-5.6-sol-coding-and-debugging-traces"
  },
  {
    "id": "glm-5.2-coding-and-debugging-traces",
    "name": "GLM 5.2 Traces",
    "kind": "dataset",
    "tag": "MOONSHINER DATA",
    "description": "GLM trajectories for instruction following, tool use, and software development.",
    "detail": "Generated through Moonshiner with deterministic checks and independent review. Cumulative examples preserve tool arguments, results, corrections, and context; only the final assistant turn is the training target.",
    "url": "https://huggingface.co/datasets/greghavens/glm-5.2-coding-and-debugging-traces"
  },
  {
    "id": "kimi-k3-coding-and-debugging-traces",
    "name": "Kimi K3 Traces",
    "kind": "dataset",
    "tag": "MOONSHINER DATA",
    "description": "Kimi K3 coding, debugging, and tool-use sessions prepared for training.",
    "detail": "Retains causal exploration from real model sessions while normalizing runtime decoration. Reviewed trajectories become cumulative next-step examples for supervised fine-tuning and distillation.",
    "url": "https://huggingface.co/datasets/greghavens/kimi-k3-coding-and-debugging-traces"
  },
  {
    "id": "fable-5-coding-and-debugging-traces-synthetic-corrections",
    "name": "Fable 5 · Synthetic Corrections",
    "kind": "dataset",
    "tag": "CORRECTED TRACES",
    "description": "A companion dataset of narrowly corrected, independently re-judged traces.",
    "detail": "Starts from failed model sessions and applies explicitly disclosed synthetic corrections. Source reasoning is preserved. It is separate from the original traces, so the provenance of corrections stays visible.",
    "url": "https://huggingface.co/datasets/greghavens/fable-5-coding-and-debugging-traces-synthetic-corrections"
  },
  {
    "id": "vcf-9x-version-tagged-sft",
    "name": "VCF 9.x Training Data",
    "kind": "dataset",
    "tag": "INFRASTRUCTURE Q&A",
    "description": "Version-aware VMware Cloud Foundation question-and-answer training data.",
    "detail": "The reviewed-qa configuration combines retained, repaired, and approved Q&A pairs. Separate provenance records and historical configurations document the dataset’s evolution. Vendor-derived licensing and coverage limits are detailed in the card.",
    "url": "https://huggingface.co/datasets/greghavens/vcf-9x-version-tagged-sft"
  },
  {
    "id": "kimi-k3-trace-explorer",
    "name": "Kimi K3 Trace Explorer",
    "kind": "space",
    "tag": "INTERACTIVE EXPLORER",
    "description": "Browse, search, and export agentic coding trajectories.",
    "detail": "A Gradio interface with dataset summaries, trajectory minimaps, syntax-highlighted tool calls, edit diffs, and filtered JSONL export. Open the Space to check its current runtime availability.",
    "url": "https://huggingface.co/spaces/greghavens/kimi-k3-trace-explorer"
  },
  {
    "id": "fable-5-trace-explorer",
    "name": "Fable 5 Trace Explorer",
    "kind": "space",
    "tag": "INTERACTIVE EXPLORER",
    "description": "Browse, search, and export agentic coding trajectories.",
    "detail": "A Gradio interface with dataset summaries, trajectory minimaps, syntax-highlighted tool calls, edit diffs, and filtered JSONL export. Open the Space to check its current runtime availability.",
    "url": "https://huggingface.co/spaces/greghavens/fable-5-trace-explorer"
  }
];
