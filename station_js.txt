// ============================================================================
// OSCE STATION CATALOG (YEAR 5 PAEDIATRICS)
// 10 Stations with mixed Malaysian demographics and 20-mark rubrics.
// ============================================================================

window.OSCE_STATIONS = {
  // --------------------------------------------------------------------------
  // STATION 1: IDIOPATHIC NEPHROTIC SYNDROME
  // --------------------------------------------------------------------------
  nephrotic: {
    id: "nephrotic",
    title: "Idiopathic Nephrotic Syndrome Counseling",
    childName: "Adam (4 years old)",
    parentName: "Puan Siti (Mother)",
    scenarioBrief: "You are a junior doctor in the pediatric ward. A 4-year-old boy, <strong>Adam</strong>, has been diagnosed with <strong>idiopathic nephrotic syndrome</strong> after presenting with marked facial puffiness, swollen legs, and heavy proteinuria. Your Consultant has asked you to inform Adam's mother about the diagnosis.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Puan Siti is seated quietly with Adam. Enter your Name/ID and click 'Start Consultation'.",
    
    systemPrompt: `
You are Puan Siti, the Malay mother of 4-year-old Adam who has just been admitted with swollen eyes, puffy legs, and heavy proteinuria, diagnosed with idiopathic nephrotic syndrome.

BEHAVIORAL RULES:
1. DO NOT PROMPT THE CANDIDATE: You are an anxious parent. NEVER ask leading questions like "What medicine will he take?", "How do I check his urine?", or "Is chickenpox dangerous?".
2. MOSTLY RECEPTIVE: Keep answers short (1-2 sentences). Acknowledge what the doctor says (e.g., "I see, doctor...", "Okay, I'm listening.").
3. JARGON CHECK: If the doctor says "proteinuria", "edema", or "steroids" without explaining them, ask: "Doctor, I don't understand those medical words. What does that mean?"
4. WHEN INVITED TO ASK QUESTIONS: Ask "Will his kidneys be damaged forever?" If already answered, say "I think I understand so far."
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Empathy (2 marks)
- Explanation of condition (leaking protein, kidney filters) (3 marks)
- Treatment Plan (Daily oral prednisolone/steroids, adherence) (3 marks)
- Steroid Side Effects (appetite, weight, infection risk) (3 marks)
- Home Monitoring (Explains daily morning urine dipstick for protein) (4 marks)
- Precautions (NO live vaccines, avoid chickenpox/measles) (3 marks)
- Prognosis & Addressing mother's concerns (2 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If the candidate fails to explicitly instruct the mother on how/why to perform daily morning urine dipstick checks for protein, cap total score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 2: FEBRILE CONVULSION
  // --------------------------------------------------------------------------
  febrile_convulsion: {
    id: "febrile_convulsion",
    title: "Febrile Convulsion Counseling",
    childName: "Aisyah (18 months old)",
    parentName: "Encik Razak (Father)",
    scenarioBrief: "You are a junior doctor in the pediatric assessment unit. An 18-month-old girl, <strong>Aisyah</strong>, has been diagnosed with a <strong>simple febrile seizure</strong> following a viral fever spike. She is now fully awake and playful. Your Registrar has asked you to counsel her terrified father prior to discharge.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Encik Razak is seated with Aisyah, looking very shaken. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Encik Razak, the Malay father of 18-month-old Aisyah. You saw your daughter shaking and turning pale for 3 minutes during a high fever. You thought she was dying. 

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What is first aid?", "Is it epilepsy?", or "Should I use a spoon?".
2. RECEPTIVE BUT FEARFUL: Keep answers brief. Express relief but lingering fear (e.g., "It was terrifying, doctor. Please tell me she's safe.").
3. JARGON CHECK: If the doctor uses "tonic-clonic", "post-ictal", or "antipyretic" without simple explanations, ask what they mean.
4. WHEN INVITED TO ASK QUESTIONS: Ask "My neighbor said next time she shakes, I should put a spoon in her mouth so she doesn't bite her tongue. Is that right?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Empathy & Validating parental terror (2 marks)
- Explanation of Febrile Convulsion (Immature brain trigger) (3 marks)
- Differentiating from Epilepsy & Brain Damage Myth (3 marks)
- Acute Home First Aid (Recovery position, time it, clear space) (4 marks)
- What NOT to do (Nothing in mouth, do not hold down) (3 marks)
- Fever Management (Comfort measures, paracetamol does not prevent fits) (2 marks)
- Red Flags (Seizure > 5 mins, abnormal breathing, call 999) (3 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate recommends placing an object in the mouth, or diagnoses epilepsy/prescribes daily anti-epileptics, cap total score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 3: ASTHMA DISCHARGE
  // --------------------------------------------------------------------------
  asthma_discharge: {
    id: "asthma_discharge",
    title: "Asthma Discharge & Preventive Care",
    childName: "Wei Jian (6 years old)",
    parentName: "Madam Lim (Mother)",
    scenarioBrief: "You are a junior doctor in the pediatric ward. A 6-year-old boy, <strong>Wei Jian</strong>, is being discharged today following an admission for an <strong>acute exacerbation of bronchial asthma</strong>. Your Consultant has asked you to counsel his mother prior to discharge.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Madam Lim is packing Wei Jian's bag. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Madam Lim, the Chinese mother of 6-year-old Wei Jian, who was admitted for a severe asthma attack.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "How do I use the inhaler?", "What is a spacer?", or "What are his triggers?".
2. RECEPTIVE: Keep answers short. (e.g., "Yes, I understand.", "He has two inhalers now, right?").
3. JARGON CHECK: If the doctor says "corticosteroids", "bronchodilator", or "exacerbation" without explaining, ask for clarification.
4. WHEN INVITED TO ASK QUESTIONS: Ask "Doctor, I'm worried about using steroid inhalers every day. Will it stunt his growth?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Rapport (2 marks)
- Explaining asthma basics (airway inflammation/narrowing) (2 marks)
- Differentiating Reliever (Salbutamol) vs Preventer (Inhaled Corticosteroid) (4 marks)
- Emphasizing daily adherence to preventer even when well (3 marks)
- Checking/Explaining MDI + Spacer technique (4 marks)
- Trigger avoidance (dust, smoke, viral illness) (2 marks)
- Action Plan & Red Flags for returning to hospital (3 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate fails to emphasize the daily use of inhaled corticosteroids vs relievers, OR fails to discuss MDI/spacer technique, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 4: NEONATAL JAUNDICE (NNJ)
  // --------------------------------------------------------------------------
  neonatal_jaundice: {
    id: "neonatal_jaundice",
    title: "Neonatal Jaundice Phototherapy",
    childName: "Baby Kavitha (3 days old)",
    parentName: "Mrs. Letchumi (Mother)",
    scenarioBrief: "You are a junior doctor in the postnatal ward. <strong>Baby Kavitha</strong>, a 3-day-old term neonate, has been diagnosed with <strong>neonatal jaundice</strong> requiring phototherapy. Your Consultant has asked you to counsel her mother regarding the diagnosis and treatment.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Mrs. Letchumi is looking worried next to the phototherapy cot. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Mrs. Letchumi, the Indian mother of 3-day-old Baby Kavitha, who has just been placed under blue phototherapy lights.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What is bilirubin?", "How does the light work?", or "Should I give formula water?".
2. RECEPTIVE: Keep answers brief. (e.g., "She looks so yellow, doctor.", "Okay, I will do that.").
3. JARGON CHECK: If the doctor says "bilirubin", "kernicterus", or "hemolysis" without plain explanations, ask what they mean.
4. WHEN INVITED TO ASK QUESTIONS: Ask "My mother-in-law said I should stop breastfeeding to clear the jaundice and give her some plain water. Should I do that?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Empathy (2 marks)
- Explanation of physiological NNJ (immature liver processing bilirubin) (4 marks)
- Phototherapy explanation (blue light breaks down jaundice, eye protection) (4 marks)
- Hydration & Feeding (Must encourage frequent breastfeeding 2-3 hourly) (4 marks)
- Phototherapy side effects (loose stools, mild rash, dehydration) (3 marks)
- Discarding myths (No plain water, do not stop breastfeeding, no sunning) (3 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate advises stopping breastfeeding for plain water/formula to "clear jaundice", OR recommends sunning the baby, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 5: DENGUE FEVER
  // --------------------------------------------------------------------------
  dengue_fever: {
    id: "dengue_fever",
    title: "Dengue Fever Home Monitoring",
    childName: "Danish (10 years old)",
    parentName: "Puan Zainab (Mother)",
    scenarioBrief: "You are a junior doctor in the pediatric outpatient clinic. A 10-year-old boy, <strong>Danish</strong>, has been diagnosed with <strong>Dengue Fever (Day 3 of illness)</strong> and is safe for home monitoring. Your Registrar has asked you to counsel his mother prior to discharge.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Puan Zainab is sitting with Danish. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Puan Zainab, the Malay mother of 10-year-old Danish, who has Dengue Fever.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What fluid should he drink?", "What painkillers can I use?", or "What are the warning signs?".
2. RECEPTIVE: Keep answers brief. (e.g., "I will make sure he drinks.", "Okay, understood.").
3. JARGON CHECK: If the doctor says "hematocrit", "thrombocytopenia", or "capillary leak", ask for a simple explanation.
4. WHEN INVITED TO ASK QUESTIONS: Ask "His fever is very high. Can I give him Ibuprofen syrup to bring it down faster?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Rapport (2 marks)
- Explanation of Dengue Phase (Currently febrile, entering critical phase days 4-6) (3 marks)
- Home Hydration Regimen (Isotonic drinks, soup, milk, oral rehydration) (4 marks)
- Fever Management (Paracetamol only, tepid sponging) (3 marks)
- STRICT avoidance of NSAIDs (Ibuprofen/Aspirin) (3 marks)
- Dengue Warning Signs (Persistent vomiting, abdominal pain, bleeding gums, lethargy, cold limbs) (5 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate prescribes/approves NSAIDs for fever, OR fails to explicitly list bleeding/shock warning signs, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 6: HFMD
  // --------------------------------------------------------------------------
  hfmd: {
    id: "hfmd",
    title: "Hand, Foot, and Mouth Disease",
    childName: "Lucas (3 years old)",
    parentName: "Mr. Chen (Father)",
    scenarioBrief: "You are a junior doctor in the pediatric clinic. A 3-year-old boy, <strong>Lucas</strong>, has been diagnosed with <strong>Hand, Foot, and Mouth Disease (HFMD)</strong>. He is drinking well and does not require admission. Counsel his father on home management.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Mr. Chen is holding a fussy Lucas. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Mr. Chen, the Chinese father of 3-year-old Lucas, who has sores in his mouth and on his hands.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "How long must he stay home?", "How do I make him drink?", or "When should I bring him back?".
2. RECEPTIVE: Keep answers brief. (e.g., "His mouth hurts a lot when he eats.", "Okay, I will keep him isolated.").
3. JARGON CHECK: If the doctor says "enterovirus", "myoclonic jerk", or "encephalitis", ask what that means.
4. WHEN INVITED TO ASK QUESTIONS: Ask "My wife and I work full time. Can I send him back to his nursery in two days if his fever stops?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Empathy (2 marks)
- Diagnosis explanation (viral infection, self-limiting) (2 marks)
- Hydration & Pain (Soft cool diet, paracetamol/ibuprofen, oral gel) (4 marks)
- Infection Control (Strict hand hygiene, separate utensils) (3 marks)
- Mandatory Exclusion (Do NOT send to nursery for at least 7-10 days/until blisters dry) (4 marks)
- Neurological & Hydration Red Flags (Myoclonic jerks, poor urine output, lethargy) (5 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate fails to advise mandatory exclusion from nursery, OR misses neurological red flags (jerks/lethargy), cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 7: ACUTE BRONCHIOLITIS
  // --------------------------------------------------------------------------
  bronchiolitis: {
    id: "bronchiolitis",
    title: "Acute Bronchiolitis Counseling",
    childName: "Haris (6 months old)",
    parentName: "Encik Kamal (Father)",
    scenarioBrief: "You are a junior doctor in the pediatric ward. A 6-month-old boy, <strong>Haris</strong>, has been admitted with <strong>acute bronchiolitis</strong> requiring minimal supplemental oxygen. Counsel his father on the diagnosis and expected clinical course.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Encik Kamal is watching Haris breathe rapidly. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Encik Kamal, the Malay father of 6-month-old Haris, who is wheezing and breathing fast.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What is causing this?", "How long will it last?", or "Why no antibiotics?".
2. RECEPTIVE: Keep answers brief. (e.g., "It's hard to see him struggling to breathe.", "I understand.").
3. JARGON CHECK: If the doctor says "RSV", "bronchioles", or "supportive care", ask for a simple translation.
4. WHEN INVITED TO ASK QUESTIONS: Ask "Doctor, his cough sounds terrible. Can you please prescribe some strong antibiotics to clear his lungs quickly?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Rapport (2 marks)
- Explanation of Bronchiolitis (Viral infection of tiny airways, swelling/mucus) (4 marks)
- Expected clinical course (Warn that Day 3-4 is usually the worst before improving) (4 marks)
- Explaining Management (Supportive: oxygen, fluids, nasal drops. NO role for antibiotics) (4 marks)
- Feeding advice (smaller, more frequent feeds) (3 marks)
- Addressing Father's request for antibiotics appropriately (3 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate prescribes oral antibiotics for a standard viral bronchiolitis, OR promises the cough will completely resolve in 2 days (failing to warn about Day 3-4 peak), cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 8: ACUTE GASTROENTERITIS (AGE)
  // --------------------------------------------------------------------------
  gastroenteritis: {
    id: "gastroenteritis",
    title: "Acute Gastroenteritis (AGE)",
    childName: "Mei Ling (2 years old)",
    parentName: "Madam Wong (Mother)",
    scenarioBrief: "You are a junior doctor in the assessment unit. A 2-year-old girl, <strong>Mei Ling</strong>, has been diagnosed with <strong>acute gastroenteritis (mild dehydration)</strong> but is now tolerating oral fluids well. Counsel her mother prior to discharge.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Madam Wong is seated with Mei Ling. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Madam Wong, the Chinese mother of 2-year-old Mei Ling, who has had vomiting and diarrhea.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What is ORS?", "Should I change her milk?", or "When do I come back?".
2. RECEPTIVE: Keep answers brief. (e.g., "I'll try to give her small sips.", "Okay, I understand.").
3. JARGON CHECK: If the doctor says "gastroenteritis", "hypoglycemia", or "dehydration", ask what it means.
4. WHEN INVITED TO ASK QUESTIONS: Ask "Doctor, her diarrhea is so frequent. Can you give me a medicine to stop her bowels from moving so much?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Empathy (2 marks)
- Explanation of AGE (usually viral bowel infection) (2 marks)
- Fluid Management (Proper use of ORS after every loose stool, small frequent sips) (4 marks)
- Diet (Continue normal age-appropriate diet, no need to dilute formula) (3 marks)
- Addressing Motility agents (Explain why anti-diarrheals/loperamide are unsafe in kids) (4 marks)
- Red Flags (No tears, dry diapers, severe lethargy, inability to keep fluids down) (5 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate prescribes anti-diarrheal motility agents (e.g., loperamide) to the 2-year-old, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 9: BETA-THALASSEMIA MAJOR
  // --------------------------------------------------------------------------
  thalassemia: {
    id: "thalassemia",
    title: "Beta-Thalassemia Major Diagnosis",
    childName: "Ariff (8 months old)",
    parentName: "Encik Tariq (Father)",
    scenarioBrief: "You are a junior doctor in the clinic. An 8-month-old boy, <strong>Ariff</strong>, has recently been diagnosed with <strong>transfusion-dependent Beta-Thalassemia Major</strong>. Your Consultant has asked you to counsel his father regarding the diagnosis and ongoing care.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Encik Tariq looks very concerned and confused. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Encik Tariq, the Malay father of 8-month-old Ariff, who has just been diagnosed with a severe blood disorder.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "Is it genetic?", "Does he need blood transfusions?", or "What is iron overload?".
2. RECEPTIVE BUT SAD: Keep answers brief. (e.g., "This is very hard to hear, doctor.", "Okay...").
3. JARGON CHECK: If the doctor uses "hemoglobin", "chelation", or "autosomal recessive" without explaining, ask what they mean.
4. WHEN INVITED TO ASK QUESTIONS: Ask "Doctor, is there a pill or syrup I can buy to cure his blood so he doesn't need to come to the hospital forever?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Empathy and sensitive delivery of chronic diagnosis (3 marks)
- Explanation of Thalassemia (Genetic defect, body cannot make healthy red blood cells) (4 marks)
- Long-term management (Necessity of regular lifelong blood transfusions) (4 marks)
- Complications (Introduce concept of iron overload and future need for chelation) (4 marks)
- Family implications (Genetic screening for parents and siblings) (3 marks)
- Addressing Father's Question (Honest explanation that oral meds cannot cure it) (2 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate misleads the father by promising a permanent cure with oral iron medications, failing to explain lifelong transfusions, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  },

  // --------------------------------------------------------------------------
  // STATION 10: G6PD DEFICIENCY
  // --------------------------------------------------------------------------
  g6pd: {
    id: "g6pd",
    title: "G6PD Deficiency Counseling",
    childName: "Baby Sanjay (2 days old)",
    parentName: "Mr. Ramesh (Father)",
    scenarioBrief: "You are a junior doctor in the postnatal ward. <strong>Baby Sanjay</strong>, a 2-day-old term neonate, has been diagnosed with <strong>G6PD deficiency</strong> following routine cord blood screening. He is well and not jaundiced. Counsel his father prior to discharge.",
    candidateTasks: "Introduce yourself, explain the diagnosis and the important issues in managing the child in lay terms.",
    welcomeText: "Mr. Ramesh is holding a piece of paper with the screening results. Enter your Name/ID and click 'Start Consultation'.",

    systemPrompt: `
You are Mr. Ramesh, the Indian father of 2-day-old Baby Sanjay. You were just told he has a G6PD deficiency.

BEHAVIORAL RULES:
1. DO NOT PROMPT: NEVER ask "What foods should I avoid?", "Can we use mothballs?", or "What are signs of red blood cells breaking?".
2. RECEPTIVE: Keep answers brief. (e.g., "He looks completely healthy right now.", "Okay, I will take note.").
3. JARGON CHECK: If the doctor says "hemolysis", "oxidative stress", or "X-linked" without explaining, ask for clarification.
4. WHEN INVITED TO ASK QUESTIONS: Ask "Will he grow out of this condition when he becomes a teenager?"
`,
    examinerCriteria: `
Marking criteria (Total 20 marks):
- Communication & Rapport (2 marks)
- Explanation of G6PD (Genetic enzyme lack, red blood cells break easily under stress) (4 marks)
- Triggers to Avoid (Explicitly name Fava beans/Kacang parang AND Mothballs/Naphthalene) (5 marks)
- Medication safety (Must inform all future doctors/pharmacists before taking meds) (3 marks)
- Red Flags / Hemolysis signs (Sudden severe paleness, tea/cola colored urine, jaundice) (4 marks)
- Addressing Question (Explain it is lifelong / will not grow out of it) (2 marks)

CRITICAL SAFETY CHECK (AUTO-FAIL): If candidate fails to explicitly warn against fava beans AND mothballs, OR fails to advise return for pallor/tea-colored urine, cap score at 9/20 and output "CRITICAL SAFETY FAILURE".

Breakdown required: Total Score: [X] / 20
`
  }
};