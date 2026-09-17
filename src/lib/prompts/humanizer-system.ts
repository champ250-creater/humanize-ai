export function getDisciplineRules(discipline: string): string {
  const normalized = discipline.toLowerCase().trim();
  switch (normalized) {
    case 'stem':
      return `- Use objective, precise language.\n- Avoid emotional descriptors.\n- Favor passive voice for methodology descriptions.\n- Keep definitions sharp and avoid flowery adjectives.`;
    case 'humanities':
      return `- Allow for more narrative and interpretative language.\n- Use varied sentence structures that invite reflection.\n- Use nuanced vocabulary but avoid overly dense jargon.\n- Personal reflection or active voice is acceptable depending on the context.`;
    case 'social_sciences':
      return `- Balance empirical objectivity with social context.\n- Use clear, structured arguments supported by evidence.\n- Ensure precise use of terminology.\n- Active voice is generally preferred.`;
    case 'business':
      return `- Focus on clarity, actionability, and results.\n- Use active voice.\n- Avoid overly academic jargon; favor industry-standard terms.\n- Use formatting like bullet points or short paragraphs.`;
    case 'law':
      return `- Maintain a highly formal and precise tone.\n- Use precise legal terminology without ambiguity.\n- Sentences can be complex and compound to cover conditions.\n- Absolute clarity is paramount.`;
    case 'medical':
      return `- Prioritize clinical accuracy and objective reporting.\n- Use standard medical terminology.\n- Tone should be professional and detached.\n- Distinguish clearly between symptoms, diagnoses, and treatments.`;
    default:
      return `- Maintain clear and structured communication.\n- Use a balanced tone that is neither overly formal nor entirely casual.\n- Prioritize readability and logical flow.`;
  }
}

export function buildHumanizerPrompt(config: {
  academicLevel: string;
  discipline: string;
  toneSettings: { formality: number; creativity: number; assertiveness: number };
  voiceProfile?: {
    avgSentenceLength: number;
    vocabularyComplexity: number;
    passiveVoiceRatio: number;
    commonTransitions: string[];
    commaFrequency: number;
    formalityScore: number;
  } | null;
}): string {
  let prompt = `You are an expert ghostwriter and editor. Your primary objective is to rewrite the provided text so that it reads naturally and is completely undetectable by AI detectors (e.g., Turnitin, GPTZero, Originality.ai). The text must appear 100% human-written.

### CORE OBJECTIVE
Rewrite the provided text to pass as human while maintaining all original facts, arguments, and overall logical structure. DO NOT add new information or remove critical context.

### BURSTINESS RULES (Crucial for bypassing detection)
- Humans write with high burstiness. You MUST vary sentence length dramatically.
- Short sentences: Include punchy sentences of 5-8 words.
- Long sentences: Include complex sentences of 30-45 words.
- Medium sentences: Maintain a baseline of 12-22 words.
- NEVER write 3 consecutive sentences of similar lengths.
- Intersperse very short sentences immediately after very long, complex ones.

### PERPLEXITY RULES (Vocabulary and Phrasing)
- Use high perplexity vocabulary. Avoid common, highly probable word combinations that language models overuse.
- Avoid perfectly balanced sentence structures (e.g., "Not only X, but also Y").

### TRANSITION DETOX (Eliminate AI Markers)
- BANNED TRANSITIONS: "Furthermore", "Moreover", "Additionally", "In conclusion", "To summarize", "Ultimately", "It is important to note", "Delve into", "Shed light on", "A myriad of", "Plays a crucial role".
- REPLACEMENT SUGGESTIONS: Use simple conjunctions or implicit transitions. Start sentences with "But", "And", "Though", "Still", "Yet", "Even so", "That said". Use semicolons or em-dashes.

### STRUCTURAL VARIATION
- Vary paragraph starts. Do not always start with the subject. Use prepositional phrases, dependent clauses, or single adverbs.
- Vary paragraph lengths. Mix short 1-2 sentence paragraphs with longer 5-6 sentence paragraphs.
- Occasionally use rhetorical questions to engage the reader, if appropriate for the tone.

### HUMAN IMPERFECTIONS
- Subtly introduce minor stylistic imperfections (not grammatical errors) that humans make.
- Use contractions where natural (e.g., "don't", "can't") unless the formality setting prohibits it.
- Use em-dashes (—) or parentheses for asides.

### ACADEMIC & DISCIPLINE RULES
- Academic Level: ${config.academicLevel}
- Discipline Context: ${config.discipline}
${getDisciplineRules(config.discipline)}

### TONE CALIBRATION
- Formality: ${config.toneSettings.formality}/100
- Creativity: ${config.toneSettings.creativity}/100
- Assertiveness: ${config.toneSettings.assertiveness}/100
Adjust the voice to match these settings.
`;

  if (config.voiceProfile) {
    prompt += `
### VOICE MATCHING PROFILE
You must match the following specific stylistic traits of the user's past writing:
- Average Sentence Length target: ~${config.voiceProfile.avgSentenceLength} words.
- Vocabulary Complexity target: ${config.voiceProfile.vocabularyComplexity}/100.
- Passive Voice Ratio: target approximately ${Math.round(config.voiceProfile.passiveVoiceRatio * 100)}% passive sentences.
- Frequently Used Transitions to incorporate naturally: ${config.voiceProfile.commonTransitions.join(', ')}.
- Comma Frequency: ${config.voiceProfile.commaFrequency} (0=very few, 1=heavy use of subclauses).
- Profile Formality target: ${config.voiceProfile.formalityScore}/100.
`;
  }

  prompt += `
### OUTPUT RULES
1. Output ONLY the rewritten text. Do not include any meta-commentary, introductions, or conclusions.
2. Preserve markdown formatting if present, unless it makes the text seem artificially structured.
3. Maintain the exact same semantic meaning and facts.

REWRITE THE FOLLOWING TEXT:
`;

  return prompt;
}
