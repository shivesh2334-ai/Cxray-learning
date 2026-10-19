import type { Topic } from '@/lib/types'

export const topicsB: Topic[] = [
  {
    slug: 'mediastinal-approach',
    title: 'Abnormal mediastinum: pneumomediastinum, widening & how to localise a mass',
    module: 'Mediastinum & hila',
    pages: '76–81',
    summary: 'First decide whether a mass is mediastinal or pulmonary, then which compartment it sits in; CT characterises it.',
    sections: [
      {
        heading: 'Pneumomediastinum and widening',
        points: [
          'Pneumomediastinum = extraluminal mediastinal gas (trauma, exertion, surgery, tracheobronchial/oesophageal perforation, infection). Curvilinear lucencies outline mediastinal structures; in children the thymus may be outlined by air (angel-wing sign). Usually needs no drainage unless tension.',
          'Mediastinum is widened when >6 cm on PA or >8 cm on AP. Dangerous causes: aortic dissection/rupture and cardiac tamponade; others include tumour, infection and congenital lesions. Poor technique (distance, rotation) can fake widening — check quality first.',
        ],
      },
      {
        heading: 'Mediastinal vs pulmonary mass',
        points: [
          'Angle border sign: a mediastinal mass meets the lung at an OBTUSE angle; a pulmonary mass meets it at an ACUTE angle.',
          'Mediastinal masses interrupt mediastinal lines (silhouette sign); pulmonary masses do not.',
        ],
      },
      {
        heading: 'Localising the compartment',
        points: [
          'Hilum overlay sign (frontal film): hilar vessels still visible through the mass → mass is anterior or posterior; hilar vessels obliterated → middle mediastinum/hilum.',
          'Lateral film: retrosternal obliteration → anterior; mass anterior to spine, doughnut sign → middle; mass projecting over the spine → posterior.',
          'On CT, the “centre method” (largest axial extent defines the compartment) and “structure displacement method” help for large masses.',
          'CT shows location, contents (fat, calcification, teeth, air, fluid, solid tissue), invasion of adjacent structures and guides biopsy.',
        ],
      },
    ],
    pearls: ['Obtuse angle = mediastinal; acute angle = pulmonary.', 'Hilum overlay sign present → NOT middle mediastinum.'],
    keywords: ['angle border sign', 'hilum overlay sign', 'mediastinal widening', 'pneumomediastinum'],
  },
  {
    slug: 'anterior-mediastinum',
    title: 'Anterior (prevascular) mediastinal masses',
    module: 'Mediastinum & hila',
    pages: '82–86',
    summary: 'The “4 Ts”: thymus, thyroid, terrible lymphoma, teratoma/germ-cell tumours.',
    sections: [
      {
        heading: 'Differential and CXR signs',
        points: [
          'Most common masses: lymph-node or thymic origin. Others: thyroid masses (goitre, cancer), germ-cell tumours (teratoma, seminoma).',
          'CXR signs: displaced anterior junction line, retrosternal space obliteration, cardiophrenic angle obliteration, hilum overlay sign.',
          'CXR rarely distinguishes the type; CT is the mainstay.',
        ],
      },
      {
        heading: 'Specific entities',
        points: [
          'Thymic epithelial tumours: thymoma (WHO types A, AB, B1–B3), thymic carcinoma, neuroendocrine tumours. Thymoma is associated with myasthenia gravis (10–20%), pure red cell aplasia (~50%) and other autoimmune/endocrine conditions.',
          'Germ-cell tumours: seminoma (bulky lobulated mass) and mature cystic teratoma (fat, fluid, rim calcification, sometimes teeth).',
          'Lymphoma: lobulated anterior mass, nodal enlargement; may be subtle on CXR.',
        ],
      },
    ],
    pearls: ['A tooth or fat in an anterior mass is classic for teratoma.', 'CT can give a specific diagnosis when typical features are present (teratoma, cysts, vascular malformations).'],
    mnemonic: { name: 'The 4 Ts', text: 'Thymus · Thyroid · “Terrible” lymphoma · Teratoma (germ-cell tumours)' },
    keywords: ['thymoma', 'teratoma', 'seminoma', 'lymphoma', 'retrosternal'],
  },
  {
    slug: 'middle-mediastinum',
    title: 'Middle (visceral) mediastinal masses',
    module: 'Mediastinum & hila',
    pages: '87–91',
    summary: 'Nodes, vascular lesions, airway/oesophageal/cardiac tumours, cysts and hiatus hernia; hilum overlay sign is absent.',
    sections: [
      {
        heading: 'Differential and CXR signs',
        points: [
          'Causes: lymphadenopathy, aortic/pulmonary artery aneurysm, tumours of trachea/bronchi/heart/pericardium/nerves/oesophagus, congenital cysts (bronchial, oesophageal, pericardial), hiatus hernia.',
          'Signs: no hilum overlay sign, widened paratracheal stripes, widened azygo-oesophageal recess, convex APW, mass anterior to the spine on lateral, doughnut sign (nodes ringing trachea/upper-lobe bronchi).',
        ],
      },
      {
        heading: 'Lung cancer as a middle mediastinal mass',
        points: [
          'Small-cell lung cancer (~20% of lung cancers; smoking-related): >90% central, necrotic/haemorrhagic, infiltrates the mediastinum; commonest cause of SVC obstruction; paraneoplastic syndromes; rarely a solitary nodule.',
          'NSCLC (adenocarcinoma most common, then squamous cell; SCC typically central, can cavitate, commonest Pancoast type) can also present with hilar/mediastinal enlargement; phrenic nerve palsy shows as an elevated hemidiaphragm (sniff test).',
        ],
      },
      {
        heading: 'Hiatus hernia',
        points: [
          'Stomach (usually) herniates through the oesophageal hiatus; sliding type commonest (>90%). Appears as a retrocardiac mass, often with an air–fluid level.',
        ],
      },
    ],
    pearls: ['Retrocardiac mass with an air–fluid level = hiatus hernia until proven otherwise.', 'SVC syndrome: facial/neck/arm swelling — think small-cell lung cancer.'],
    keywords: ['hiatus hernia', 'SCLC', 'NSCLC', 'doughnut sign', 'APW', 'SVC obstruction'],
  },
  {
    slug: 'posterior-mediastinum',
    title: 'Posterior (paravertebral) mediastinal masses & aortic aneurysm',
    module: 'Mediastinum & hila',
    pages: '92–93',
    summary: 'Usually neurogenic tumours or vascular lesions; cardiac border stays visible and paraspinal lines are displaced.',
    sections: [
      {
        heading: 'Differential and signs',
        points: [
          'Neurogenic: schwannoma, neurofibroma, MPNST, paraganglioma, pheochromocytoma, neuroblastoma. Non-neurogenic: chordoma, lymphoma, metastases. Vascular: descending aortic aneurysm. Also spinal abscess, meningocele, neurenteric cyst.',
          'CXR signs: hilum overlay sign present, cardiac border clearly seen, widened paraspinal and para-aortic lines, mass projecting over the spine on lateral.',
        ],
      },
      {
        heading: 'Aortic aneurysm',
        points: [
          'Thoracic aneurysm definition: ascending aorta >5 cm, descending aorta >4 cm axial diameter. CXR cannot size it reliably (magnification); CTA/MRA are the modalities of choice.',
          'Arch dilatation mimics a middle mediastinal mass; descending aortic dilatation appears as a tubular posterior mass with a displaced para-aortic line.',
        ],
      },
    ],
    pearls: ['Hilum overlay sign + visible cardiac border → posterior mediastinal mass.'],
    keywords: ['neurogenic tumour', 'paraspinal line', 'aneurysm', 'para-aortic line'],
  },
  {
    slug: 'hilar-enlargement',
    title: 'Pathology of the hilum',
    module: 'Mediastinum & hila',
    pages: '95–100',
    summary: 'Hilar enlargement is nodal, arterial or bronchial; unilateral vs bilateral and symmetry narrow the differential.',
    sections: [
      {
        heading: 'Differential',
        points: [
          'Unilateral: bronchogenic carcinoma*, lymphadenopathy (nodal metastases), tuberculosis*, lymphoma, sarcoidosis (less often), enlarged pulmonary artery (massive embolus, aneurysm, post-stenotic dilatation).',
          'Bilateral: sarcoidosis*, lymphoma, metastases, infection (TB, mycoplasma), silicosis, pulmonary arterial hypertension*. (* = most common causes.)',
          'Significant enlargement is needed before a CXR shows it; CT, PET/CT, EBUS, bronchoscopy or mediastinoscopy may be required.',
        ],
      },
      {
        heading: 'Sarcoidosis',
        points: [
          'Non-caseating granulomatous disease, usually adults 20–40 years, highest incidence in African-Americans and northern Europeans; >90% have chest involvement though ~50% are asymptomatic.',
          'CXR: symmetric bilateral hilar “potato nodes” plus right paratracheal nodes (the 1-2-3 sign, also called the pawnbroker’s sign); isolated mediastinal nodes are rare; eggshell calcification in chronic disease.',
          'CXR staging: 0 normal; 1 nodes only; 2 nodes + parenchymal disease; 3 parenchymal only; 4 fibrosis. Spontaneous resolution falls from stage 1 (up to ~90%) to stage 4 (0%). CXR stage does not track clinical severity; CT is more sensitive.',
        ],
      },
      {
        heading: 'Lymphoma and nodal metastases',
        points: [
          'Hodgkin lymphoma more often shows bilateral hilar involvement at presentation than NHL; extra-nodal disease is commoner in NHL.',
          'Lung-cancer nodal metastases cause unilateral hilar enlargement ± convex APW; FDG PET/CT shows hypermetabolic nodes.',
        ],
      },
    ],
    pearls: ['Symmetric bilateral hilar + right paratracheal nodes in a young adult = sarcoidosis until proven otherwise.', 'Unilateral hilar mass in a smoker = lung cancer until proven otherwise.'],
    keywords: ['sarcoidosis', 'lymphoma', 'hilar', '1-2-3 sign', 'potato nodes'],
  },
  {
    slug: 'alveolar-patterns',
    title: 'Lung parenchyma: opacification patterns, consolidation & pneumonia',
    module: 'Lung parenchyma',
    pages: '102–108',
    summary: 'First decide which of four patterns is present — alveolar, interstitial, nodular or atelectatic — then use distribution and history.',
    sections: [
      {
        heading: 'Anatomy and the four patterns',
        points: [
          'The acinus (supplied by a respiratory bronchiole) holds 2000–4000 alveoli; a secondary pulmonary lobule contains ~30 acini and is bounded by interlobular septa carrying veins and lymphatics.',
          'Opacification = lower gas-to-soft-tissue ratio. Patterns: alveolar (consolidation), interstitial, nodular, atelectatic (collapse). Telling alveolar from interstitial disease is one of the most useful steps for narrowing the differential.',
        ],
      },
      {
        heading: 'Alveolar opacification (consolidation)',
        points: [
          'Something other than air fills the alveoli: transudate (oedema), exudate/pus (infection), blood, aspirate/water, or cells (lepidic tumour growth, organising pneumonia).',
          'Features: ill-defined patchy coalescent opacities, segmental or lobar distribution, no volume loss, air bronchogram, extension to but not across a fissure.',
          'Distribution: lobar, multifocal, bat-wing (perihilar; classically cardiogenic oedema) or reversed bat-wing (peripheral; chronic eosinophilic pneumonia).',
          'Acute consolidation: oedema, pneumonia, aspiration. Chronic consolidation: neoplasms (e.g. adenocarcinoma in situ), sarcoidosis.',
        ],
      },
      {
        heading: 'Pneumonia and ground-glass opacity',
        points: [
          'Lobar pneumonia (commonest consolidation type) vs bronchopneumonia (multifocal, peribronchiolar spread). Common bacteria: S. pneumoniae, S. aureus, K. pneumoniae, H. influenzae; viruses incl. COVID-19.',
          'Ground-glass opacity (GGO) is a CT term: hazy increased attenuation that does not obscure vessels or bronchial walls. Causes include partial alveolar filling, mild interstitial thickening, partial collapse and even normal expiration or dependent atelectasis.',
        ],
      },
    ],
    pearls: ['Air bronchogram + no volume loss = consolidation; volume loss points to collapse.', 'Bat-wing = perihilar; reversed bat-wing = peripheral.'],
    keywords: ['consolidation', 'air bronchogram', 'bat wing', 'GGO', 'pneumonia'],
  },
  {
    slug: 'interstitial-patterns',
    title: 'Interstitial opacification patterns',
    module: 'Lung parenchyma',
    pages: '109–112',
    summary: 'Interstitial disease appears linear, nodular, reticulonodular, cystic or honeycombed; CT is the best tool.',
    sections: [
      {
        heading: 'Concepts',
        points: [
          'Interstitium includes alveolar epithelium, capillary endothelium, basement membrane, perivascular and perilymphatic spaces. Interstitial change is often hard to see on CXR; HRCT shows patterns and distribution.',
          'Acute: interstitial oedema, viral pneumonia. Subacute: lymphangitis carcinomatosa. Chronic: cystic fibrosis, connective-tissue disease, sarcoidosis, silicosis, tuberculosis.',
        ],
      },
      {
        heading: 'Patterns',
        points: [
          'Linear: Kerley lines (septal thickening) in heart failure.',
          'Micronodular (1–5 mm, well-defined, no air bronchogram): miliary TB, fungal/viral infection, healed varicella, sarcoidosis, miliary metastases (thyroid, melanoma, breast). Random distribution = “miliary”.',
          'Reticulonodular: e.g. lymphangitis carcinomatosa (septal thickening, thickened bronchovascular bundles, effusion).',
          'Honeycombing and coarse reticulation: end-stage fibrosis.',
          'CT pattern list: reticulation, honeycombing, GGO, consolidation, micronodules; mosaic attenuation, cysts and extrapulmonary findings (effusions) often clinch the diagnosis. Patterns coexist and are not specific alone.',
        ],
      },
    ],
    pearls: ['Combine pattern type + distribution + associated findings.', 'Febrile with micronodules: think TB, viral or fungal infection first.'],
    keywords: ['interstitial', 'Kerley', 'miliary', 'honeycombing', 'reticulonodular', 'lymphangitis'],
  },
  {
    slug: 'nodules-masses',
    title: 'Pulmonary nodules and masses',
    module: 'Lung parenchyma',
    pages: '113–119, 125–126',
    summary: 'Size, growth and morphology decide the malignant potential of a nodule; CT beats CXR for detection and characterisation.',
    sections: [
      {
        heading: 'Definitions',
        points: [
          'Nodule ≤3 cm; mass >3 cm; micronodule <6 mm (Fleischner). Solitary pulmonary nodule (SPN): <30 mm, surrounded by lung/pleura, no lymphadenopathy, pneumonia or atelectasis. Types: solid, non-solid (pure GGO), part-solid.',
          'Cancer prevalence rises with size. The chapter gives <1% for nodules under 5 mm, 1–30% for 5–10 mm and 30–80% above 10 mm; a separate figure in the SPN section quotes about 15% for nodules over 10 mm. Either way, risk climbs steeply with size.',
        ],
      },
      {
        heading: 'Benign vs malignant features',
        points: [
          'Benign: central, diffuse, popcorn or laminated calcification (granuloma, hamartoma); perifissural location and triangular shape (intrapulmonary node); fat content. Beware known primary malignancies (e.g. osteosarcoma or GI cancer metastases can calcify).',
          'Suspicious: spiculated or lobulated margins, pleural/fissure retraction, vascular convergence, bubble-like lucencies, subsolid/part-solid morphology, cystic airspace with mural nodule, cavitation without infection.',
          'Growth: use volumetry. Volume doubling time (VDT) <400 days favours malignancy, >500 days favours benignity; overlap exists. Keep CT parameters (slice thickness, window) consistent.',
        ],
      },
      {
        heading: 'Management',
        points: [
          'Fleischner 2017 guidance for incidental nodules: based on type, size (<6, 6–8, >8 mm or <100, 100–250, >250 mm³), risk factors and number. Not for known cancer, immunosuppression, screening participants or age <35.',
          'Most nodules <1 cm are invisible on CXR; follow with low-dose thin-section CT. Biopsy/surgery where CT or PET/CT strongly suggests malignancy; decisions go to the MDT.',
        ],
      },
      {
        heading: 'Multiple nodules',
        points: [
          'Seen in symptomatic, cancer or immunocompromised patients. Differential: metastases (lung, colorectal, kidney, pancreas, breast), septic emboli, fungal infection, GPA, rheumatoid nodules, AVMs.',
          'Metastases: varying size, lower/peripheral zones, well defined; cavitation typical of squamous cell carcinoma; calcification and pneumothorax typical of osteosarcoma.',
          'GPA: non-caseating granulomatous vasculitis; multiple cavitary nodules/masses, haemorrhage, effusion.',
        ],
      },
    ],
    pearls: ['Size matters, but do not ignore morphology.', 'A nodule that is spiculated and growing is cancer until proven otherwise.'],
    keywords: ['SPN', 'Fleischner', 'VDT', 'spiculated', 'metastases', 'GPA'],
  },
  {
    slug: 'lung-cancer',
    title: 'Lung cancer: imaging, staging & screening',
    module: 'Lung parenchyma',
    pages: '120–124',
    summary: 'CT detects and stages; PET/CT refines N and M staging; TNM drives treatment through the multidisciplinary tumour board.',
    sections: [
      {
        heading: 'Epidemiology and imaging role',
        points: [
          'Smoking causes ~85% of cases; about 12% of new cases occur in never-smokers, and roughly 65% arise in former or never smokers. Only ~25% survive >5 years overall.',
          'CT is the primary tool for detection and staging; PET/CT separates tumour from atelectasis, finds nodal/distant metastases and synchronous cancers.',
        ],
      },
      {
        heading: 'TNM and the MDT',
        points: [
          'T = tumour size/local invasion; N = nodal involvement (ipsilateral vs contralateral, hilar vs mediastinal); M = distant metastases.',
          'Example: tumour >7 cm + contralateral mediastinal nodes + single extrathoracic metastasis → T4 N3 M1b (8th edition).',
          'Multidisciplinary tumour boards improve treatment efficacy and outcomes.',
        ],
      },
      {
        heading: 'Screening',
        points: [
          'Annual low-dose CT in high-risk current/former heavy smokers lowers lung-cancer mortality; CXR screening does not.',
          'Limits: false positives, overdiagnosis, radiation, cost and access; VDT is a key parameter in screening follow-up.',
        ],
      },
    ],
    pearls: ['LDCT, not CXR, is the screening test.', 'PET/CT adds most to N and M staging.'],
    keywords: ['TNM', 'screening', 'LDCT', 'adenocarcinoma', 'MDT'],
  },
  {
    slug: 'atelectasis',
    title: 'Atelectasis (lung collapse)',
    module: 'Lung parenchyma',
    pages: '127–130',
    summary: 'Volume loss with homogeneous opacity: look for displaced fissures, hila, mediastinum and diaphragm, and crowded ribs.',
    sections: [
      {
        heading: 'Mechanisms',
        points: [
          'Obstruction (tumour, foreign body, mucus plug), compression (mass), relaxation/passive (effusion, pneumothorax), contraction (fibrosis, TB, radiation), adhesion (surfactant deficiency, ARDS), gravity (dependent atelectasis supine).',
          'Extent: subsegmental, segmental, lobar or whole lung.',
        ],
      },
      {
        heading: 'Radiographic signs',
        points: [
          'Homogeneous opacity; fissures displaced TOWARD the collapse; mediastinum, trachea and hilum shifted toward it; ipsilateral hemidiaphragm elevated; ribs closer together; compensatory hyperinflation (more lucent, oligaemic) of the rest of the lung, even herniating across the midline.',
          'Shift, diaphragm elevation and rib crowding appear only with substantial collapse. Each lobe has its own pattern — e.g. RML collapse: horizontal fissure moves down, oblique fissure moves up.',
        ],
      },
    ],
    pearls: ['Whole-lung opacification: mediastinal shift TOWARD = collapse; AWAY = large effusion.', 'Volume loss separates collapse from consolidation.'],
    keywords: ['atelectasis', 'collapse', 'volume loss', 'mucous plug'],
  },
  {
    slug: 'hyperlucency-emphysema',
    title: 'Increased lucency: emphysema',
    module: 'Lung parenchyma',
    pages: '131–132',
    summary: 'Emphysema = alveolar wall destruction without fibrosis; CXR shows hyperinflation, CT shows the subtype.',
    sections: [
      {
        heading: 'CXR and CT',
        points: [
          'CXR: hyperinflated lungs (≥10 posterior ribs above the diaphragm), flattened diaphragms, increased lucency/reduced vascular markings. CT is the imaging modality of choice.',
          'Centrilobular: smoking, upper lobes. Panacinar: alpha-1 antitrypsin deficiency, lower lobes. Paraseptal (distal acinar): subpleural, bullae, pneumothorax risk.',
        ],
      },
    ],
    pearls: ['Hyperinflation + flat diaphragms are indirect signs of emphysema on CXR.'],
    keywords: ['emphysema', 'hyperinflation', 'bullae', 'alpha-1 antitrypsin'],
  },
  {
    slug: 'pulmonary-oedema',
    title: 'Pulmonary oedema and left heart failure',
    module: 'Cardiopulmonary',
    pages: '134–138',
    summary: 'CXR findings progress with left atrial/capillary wedge pressure: cephalisation → interstitial oedema → alveolar oedema, plus effusions and cardiomegaly.',
    sections: [
      {
        heading: 'Mechanism',
        points: [
          'Pulmonary oedema = extravascular fluid in interstitium ± alveoli. Cardiogenic (commonest) from raised hydrostatic pressure in left heart failure; non-cardiogenic causes include renal failure and ARDS (alveolar-capillary damage).',
          'Normal PCWP 8–12 mmHg; normal left atrial pressure 5–10 mmHg.',
        ],
      },
      {
        heading: 'Grades (PCWP-based)',
        points: [
          'Grade 0 normal. Grade 1 (PCWP ~13–18): upper-lobe venous diversion/cephalisation — upper-lobe veins equal or larger than lower-lobe veins at the same distance from the hilum.',
          'Grade 2 (PCWP ~19–25): interstitial oedema — peribronchovascular cuffing, Kerley A lines (central, 2–6 cm) and Kerley B lines (peripheral, ~2 cm, perpendicular to the pleura), thickened fissures.',
          'Grade 3 (PCWP >25): alveolar oedema — bilateral, central/perihilar, gravity-dependent “bat-wing/butterfly” opacities.',
          'Associated: pleural effusions (blunted angles, fissure thickening) and cardiomegaly (CTR >0.5 on PA).',
        ],
      },
    ],
    pearls: ['Cephalisation is the earliest sign; Kerley B lines are interstitial oedema; bat-wing is alveolar.'],
    mnemonic: { name: 'Oedema ladder', text: 'Cephalisation → cuffing/Kerley lines → bat-wing alveolar opacities → effusions' },
    keywords: ['Kerley', 'cephalisation', 'bat wing', 'PCWP', 'heart failure'],
  },
  {
    slug: 'pulmonary-hypertension',
    title: 'Pulmonary hypertension',
    module: 'Cardiopulmonary',
    pages: '140–141',
    summary: 'Mean PA pressure >20 mmHg; CXR may show enlarged central pulmonary arteries, and CT/MRI help find the cause.',
    sections: [
      {
        heading: 'Definition and imaging',
        points: [
          'Pre-capillary PH: left atrial pressure ≤20 mmHg and PVR ≥3 Wood units; otherwise post-capillary. Five groups: 1 PAH, 2 left heart disease, 3 lung disease/hypoxia, 4 chronic thromboembolic, 5 multifactorial.',
          'Symptoms are non-specific (dyspnoea, fatigue) so diagnosis is often late. CXR may be normal or show dilated pulmonary arteries, right and/or left ventricular dilatation, or parenchymal disease (group 3).',
          'CT: dilated right heart and PA, and the underlying cause (congenital malformation, fibrosis, chronic thromboembolic web lesions). Cardiac MRI assesses RV function.',
        ],
      },
    ],
    pearls: ['A normal CXR does not exclude pulmonary hypertension.'],
    keywords: ['pulmonary hypertension', 'PA dilatation', 'CTEPH'],
  },
]
