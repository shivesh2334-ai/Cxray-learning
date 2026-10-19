import type { Topic } from '@/lib/types'

export const topicsA: Topic[] = [
  {
    slug: 'technique-modalities',
    title: 'Chest imaging techniques: which test when?',
    module: 'Foundations',
    pages: '8–10, 18, 20–23',
    summary:
      'CXR is the first-line, cheap, portable test for the chest; CT, ultrasound, MRI and PET/CT each answer questions the radiograph cannot.',
    sections: [
      {
        heading: 'Chest X-ray (CXR)',
        points: [
          'Quick, non-invasive and widely available; typical first test for pneumonia, TB, COPD, lung cancer, rib fractures, effusions and cardiac size.',
          'Lower sensitivity than CT/MRI: subtle disease can be missed and anatomical detail is limited, so a normal or equivocal film may need CT.',
          'Standard views: erect PA, erect/sitting lateral, and AP supine or sitting for patients who cannot stand.',
          'Digital radiography adds PACS storage, contrast/zoom adjustment, lower dose and no film processing, at the cost of set-up and maintenance expense.',
        ],
      },
      {
        heading: 'Computed tomography (CT)',
        points: [
          'Standard protocol: IV contrast with acquisition at about 20 s for arterial structures; soft-tissue, bone and lung windows plus coronal/sagittal reformats.',
          'Variants: CT angiography, CT pulmonary angiogram, HRCT (thin 1–1.5 mm sections for lung parenchyma), low-dose CT (screening/nodule follow-up).',
          'Tailor the protocol to the clinical question (e.g. suspected embolism vs lung-cancer staging) — give the radiologist good clinical information.',
          'Drawbacks: radiation dose and limited vascular assessment compared with dedicated angiography.',
        ],
      },
      {
        heading: 'Ultrasound, MRI and PET/CT',
        points: [
          'Ultrasound: pleural effusion detection/quantification and thoracentesis guidance, pneumothorax (high specificity), pneumonia, biopsy guidance; ideal at the bedside, in pregnancy and in children. Limited by obesity and subcutaneous emphysema.',
          'MRI: equal or better than CT for lung apices, diaphragm, spine, pleura, chest-wall/vessel/mediastinal invasion, cystic masses and marrow metastases; radiation-free but limited by lung motion and low proton density.',
          'PET/CT: staging and monitoring of lung cancer, oesophageal cancer and lymphoma; best for N and M staging, weak for T staging; detects occult primaries and recurrence; costly, ionising.',
        ],
      },
    ],
    pearls: [
      'CXR is the cornerstone, but CT is used to confirm/characterise findings, when the CXR is normal despite strong suspicion, and to guide biopsy.',
      'Ultrasound is the quick bedside answer for effusion and pneumothorax; MRI is reserved for special problems, usually after CT.',
    ],
    keywords: ['CT', 'HRCT', 'MRI', 'PET', 'ultrasound', 'digital radiography'],
  },
  {
    slug: 'projections-quality',
    title: 'Standard projections & technical quality',
    module: 'Foundations',
    pages: '11–19',
    summary:
      'Judge the technical quality of every film before diagnosing: rotation, inspiration, penetration and projection all change the appearance of normal anatomy.',
    sections: [
      {
        heading: 'Erect PA projection (standard frontal)',
        points: [
          'Patient standing, detector against the anterior chest, tube–detector distance about 1.80 m, central beam at the lower scapular borders; viewed as if facing the patient.',
          'Identity, date/time and a side marker must be present.',
          'No rotation: distance from each medial clavicle to the spinous processes should be equal; trachea centred.',
          'Adequate inspiration: at least 10 posterior ribs above the diaphragm, or 5–7 anterior ribs at the mid-clavicular line. <5 anterior ribs = poor inspiration; >7 = hyperinflation.',
          'Lung apices, costophrenic angles and diaphragms visible; vertebrae faintly seen behind the heart, lung vessels clearly seen; scapulae mostly outside the lung fields.',
        ],
      },
      {
        heading: 'Lateral projection',
        points: [
          'Standard is the left lateral (marked L): the left side is nearest the detector; central ray at the mid-axillary line at lower scapula level.',
          'Quality: apices, costophrenic angles, diaphragms and sternum all visible.',
          'The right posterior recess looks larger than the left on a left lateral because it lies farther from the detector.',
        ],
      },
      {
        heading: 'AP projections (supine/sitting) and PA vs AP',
        points: [
          'Used for patients too ill to stand/sit or isolated; tube distance ideally 1.80 m but sometimes 1.50 m.',
          'On AP the detector is behind the patient, so the heart is farther from it and magnified by beam divergence — it looks larger than on PA and must not be over-called as cardiomegaly.',
        ],
      },
    ],
    pearls: [
      'Rotation and poor inspiration can cause pseudo-pathology (e.g. false widening of the mediastinum, crowded vessels). Evaluate technique first to avoid overdiagnosis.',
      'Posterior ribs are more horizontal than anterior ribs — count the right ones.',
    ],
    pitfalls: ['Measuring cardiothoracic ratio on an AP film.', 'Calling a widened mediastinum on a rotated or AP supine film without checking technique.'],
    keywords: ['PA', 'AP', 'lateral', 'rotation', 'inspiration', 'exposure'],
  },
  {
    slug: 'systematic-approach',
    title: 'How to read a chest X-ray: a systematic approach',
    module: 'Foundations',
    pages: '25–26',
    summary:
      'Use the same checklist on every film, starting with technical quality, so that no anatomical region is skipped.',
    sections: [
      {
        heading: 'Why tissues look the way they do',
        points: [
          'X-ray absorption rises with the cube of atomic number (Z): calcium/bone absorbs most (white), metal is even whiter, air is black; fat, water and soft tissue are shades of grey.',
        ],
      },
      {
        heading: 'Pick a method and stick with it',
        points: [
          'ABCDEFGHI mnemonic: Airway, Bones & soft tissue, Cardiac, Diaphragm, Effusion, Fields/fissures/foreign bodies, Great vessels, Hila & lung, Impression.',
          'Periphery → centre: chest-wall soft tissue and bones → pleural spaces → lung contours (mediastinal margins, diaphragm) → lungs and vessels → hila → mediastinum → heart.',
          'Centre → periphery is the mirror-image alternative.',
          'Always start by checking image quality (projection, rotation, inspiration, penetration).',
        ],
      },
    ],
    pearls: ['The exact sequence matters less than using the same one every time; a checklist prevents missed lesions.'],
    mnemonic: { name: 'ABCDEFGHI', text: 'Airway · Bones & soft tissue · Cardiac · Diaphragm · Effusion · Fields, fissures, foreign bodies · Great vessels · Hila & lung · Impression' },
    keywords: ['checklist', 'ABCDEFGHI', 'search pattern'],
  },
  {
    slug: 'normal-chestwall-pleura',
    title: 'Normal CXR: chest wall, bones, pleura & fissures',
    module: 'Normal anatomy',
    pages: '28–32',
    summary: 'Know what normal soft tissue, bone, pleura and fissure anatomy looks like so variants are not mistaken for disease.',
    sections: [
      {
        heading: 'Soft tissues and bones',
        points: [
          'Chest wall, breast and neck soft tissues are usually symmetric; breast asymmetry is common and can make one lower zone look denser — do not mistake it for lung disease.',
          'Nipple shadows may mimic nodules; metallic nipple markers can settle the question. Normal fat planes between muscles are smooth.',
          'Visible bones: clavicles, scapulae, humeri, ribs, sternum and spine. Normal bone has a dense cortex and a less dense marrow cavity; spinous processes form a straight line on PA; the lateral spine shows mild kyphosis.',
          'CXR is insensitive for bone pathology — subtle lesions are easily overlooked.',
        ],
      },
      {
        heading: 'Pleura and pleural cavity',
        points: [
          'The pleura is a serous membrane (visceral on the lung, parietal on the chest wall, diaphragm and mediastinum); the right and left pleural spaces do not communicate; normal volume ~15 ml of fluid, so it is only a potential space.',
          'The normal pleural cavity is seen only when abnormal; lung markings should reach the chest wall.',
          'Right hemidiaphragm is at the same level or higher than the left. Costophrenic angles must be acute and sharp (lateral, anterior and posterior recesses).',
          'Horizontal fissure: thin line at the level of the right hilum separating right upper from middle lobe. Oblique (major) fissures are visible only on the lateral film.',
        ],
      },
    ],
    pearls: ['Costophrenic angles are always sharp and acute in health.', 'Normal fissures are often invisible; when seen they sit in predictable places.'],
    keywords: ['fissure', 'costophrenic', 'nipple shadow', 'bone', 'pleura'],
  },
  {
    slug: 'normal-mediastinum',
    title: 'Normal CXR: mediastinum, heart, lines & stripes',
    module: 'Normal anatomy',
    pages: '33–46',
    summary:
      'The mediastinum and its pleural lines and stripes are the landmarks used to detect and localise masses; learn each normal line and its expected width.',
    sections: [
      {
        heading: 'Contours and the cardiothoracic ratio',
        points: [
          'Right border: SVC, azygos vein, right atrium, IVC. Left border: aortic knuckle, aorto-pulmonary window (APW), main pulmonary artery, left atrial appendage, left ventricle.',
          'The azygos vein is usually a small lenticular shadow; in 1–2% an azygos fissure puts it outside the mediastinum. A right aortic arch may be a normal variant or associated with congenital anomalies.',
          'On a lateral film the retrosternal and retrocardiac spaces should be lucent; the left pulmonary artery lies higher than the right.',
          'Cardiothoracic ratio (CTR) = maximal cardiac width ÷ maximal internal thoracic width, on a PA film only. Normal is about 0.42–0.50/0.55; <0.42 = small-heart; expiration or a big epicardial fat pad can push it >0.5 without cardiomegaly; pericardial effusion also enlarges the silhouette.',
        ],
      },
      {
        heading: 'Compartments',
        points: [
          'Felson (lateral CXR): anterior, middle (to 1 cm behind the anterior vertebral edge) and posterior compartments.',
          'ITMIG (CT): prevascular (anterior), visceral (middle) and paravertebral (posterior). Roughly 50% of mediastinal masses are prevascular, ~25% visceral and ~25% paravertebral.',
          'Shared terminology supports differential diagnosis, multidisciplinary discussion and planning of biopsy/surgery.',
        ],
      },
      {
        heading: 'Lines, stripes and interfaces',
        points: [
          'Lines (<1 mm): anterior junction line (seen in ~25–57%), posterior junction line (~40%, vertical through the tracheal air column).',
          'Stripes: right paratracheal stripe (normally <4–5 mm; seen in 65–97%); left paratracheal stripe (21–31%, variable).',
          'Interfaces: right paravertebral line (seen ~90%) and left (<50%); azygo-oesophageal recess (below the azygos arch); aorto-pulmonary window (concave or straight lateral border; a convex APW is abnormal); aortic-pulmonary stripe; para-aortic line (≥50%).',
          'Thickening, displacement or loss of these lines points to adjacent mediastinal pathology and helps justify CT.',
        ],
      },
    ],
    pearls: [
      'Use the CTR on PA films only; the AP projection magnifies the heart.',
      'A convex aorto-pulmonary window or widened right paratracheal stripe suggests nodes or a middle mediastinal mass.',
    ],
    keywords: ['CTR', 'APW', 'paratracheal stripe', 'azygos', 'junction line', 'Felson', 'ITMIG'],
  },
  {
    slug: 'normal-hila-lobes',
    title: 'Normal CXR: hila, lobes, segments & zones',
    module: 'Normal anatomy',
    pages: '47–50',
    summary: 'Hila are mostly vessels; lung lobes touch specific heart borders; zones are a descriptive tool, not anatomy.',
    sections: [
      {
        heading: 'Hila',
        points: [
          'Contain main bronchi, pulmonary vessels (~99% of hilar volume) and nodes; normal nodes are not visible.',
          'Both hila should be of similar size and density. The left hilar point is 1–2 cm higher than the right in ~96% (same level in ~4%).',
          'Enlarged nodes are the most common cause of pathological hilar enlargement.',
        ],
      },
      {
        heading: 'Lobes and segments',
        points: [
          'Right lung: upper (apical, posterior, anterior segments), middle (medial, lateral) and lower (5 segments). Left lung: upper (apicoposterior, anterior, superior and inferior lingular) and lower (4 segments).',
          'Horizontal fissure separates right upper and middle lobes; right oblique fissure separates the lower lobe from upper+middle lobes; left oblique fissure separates upper from lower lobe.',
          'Right middle lobe (medial segment) abuts the right heart border; the lingula abuts the left heart border.',
        ],
      },
      {
        heading: 'Zones and vessels',
        points: [
          'Upper, middle and lower zones are each a third of the lung height and do not correspond to lobes; compare each zone with the opposite side.',
          'Erect upper-zone vessels are about one-third the size of lower-zone vessels because perfusion per volume rises from apex to base; peripheral third vessels are fewer and smaller.',
          'Asymmetric zone density (after excluding rotation) strongly suggests lung pathology.',
        ],
      },
    ],
    pearls: ['The left hilum is normally slightly higher than the right.', 'Normal erect vessel gradient: small upper-zone vessels, larger lower-zone vessels — reversal means redistribution.'],
    keywords: ['hilum', 'lobes', 'segments', 'zones', 'lingula'],
  },
  {
    slug: 'silhouette-sign',
    title: 'The silhouette sign',
    module: 'Signs, chest wall & devices',
    pages: '52–54',
    summary: 'Two touching structures of the same density lose their border; this localises lung opacities.',
    sections: [
      {
        heading: 'Principle',
        points: [
          'Loss of the normal outline of a structure = silhouette sign present: the opacity is in contact with that structure.',
          'A well-seen border = sign absent: the opacity lies in a different plane (not touching).',
        ],
      },
      {
        heading: 'Applications',
        points: [
          'Right heart border lost → right middle lobe (medial segment) consolidation; right heart border preserved → right lower lobe (more posterior).',
          'Left heart border lost → lingula; left heart border preserved but retrocardiac opacity → left lower lobe.',
          'On the lateral film, the left hemidiaphragm is visible only until it meets the heart (same density, in contact), while the right hemidiaphragm is seen to the front chest wall because lung air outlines it.',
          'Also used in the mediastinum: an anterior right mass can obscure the SVC and right heart border; a posterior mass can obscure the paraspinal stripes.',
        ],
      },
    ],
    pearls: ['Lost border = touching; preserved border = separate plane.'],
    mnemonic: { name: 'Silhouette quick-rule', text: 'Right heart border → RML · Left heart border → lingula · Preserved heart border → lower lobe' },
    keywords: ['silhouette', 'localisation', 'RML', 'lingula'],
  },
  {
    slug: 'chestwall-devices-bone',
    title: 'Soft tissue asymmetry, devices and bone pathology',
    module: 'Signs, chest wall & devices',
    pages: '56–62',
    summary: 'Check soft tissues, foreign bodies and bones deliberately — they are common “missed” areas on a CXR.',
    sections: [
      {
        heading: 'Soft tissue asymmetry',
        points: [
          'Decreased density on one side: mastectomy or subcutaneous emphysema (air after trauma, chest drain placement or anaerobic infection).',
          'Increased density: large soft-tissue mass, haematoma or asymmetric breast tissue.',
        ],
      },
      {
        heading: 'Medical devices & foreign bodies',
        points: [
          'Internal: pacemakers, sternal wires, valves, NG/endotracheal/pleural tubes, dialysis catheters, osteosynthesis material. External: oxygen tubing, ECG electrodes, clamps, gown buttons, hair pins.',
          'Both PA and lateral views are needed to locate a device or foreign body reliably.',
        ],
      },
      {
        heading: 'Bone pathology',
        points: [
          'Rib fractures: common in blunt trauma, often subtle if undisplaced; multiple fractures typically involve ribs 4–10; fractures of ribs 1–3 mean high-energy trauma. Complications: pneumothorax, haemothorax, contusion/laceration, vessel or brachial plexus injury.',
          'Flail chest: segmental fractures of >3 ribs cause paradoxical chest-wall movement. Healed fractures show callus; complete healing usually by ~12 weeks.',
          'Bone is the third most common metastatic site (after lung and liver). Osteolytic: myeloma, lung cancer, NHL. Osteoblastic: prostate cancer, small-cell lung cancer, Hodgkin lymphoma. Mixed also occurs.',
          'Pancoast tumour (apical, usually squamous cell carcinoma) can erode ribs/vertebrae.',
        ],
      },
    ],
    pearls: ['Bone abnormalities are easily overlooked — look for them deliberately.', 'Lateral view is needed to localise devices and foreign bodies.'],
    keywords: ['rib fracture', 'flail chest', 'metastases', 'Pancoast', 'devices', 'subcutaneous emphysema'],
  },
  {
    slug: 'pleural-effusion',
    title: 'Pleural effusion',
    module: 'Pleura',
    pages: '64–67',
    summary: 'Fluid in the pleural space: know its signs, how much is needed to see it, and its mimics (loculated and fissural fluid).',
    sections: [
      {
        heading: 'Causes and types',
        points: [
          'Normal pleural fluid is ~15 ml. Effusion results from an imbalance between production and absorption.',
          'Transudates (lower protein, LDH and specific gravity): heart failure, nephrotic syndrome, cirrhosis. Exudates: neoplasm/metastases, infection, autoimmune disease.',
          'Effusion causes passive (relaxation) atelectasis of adjacent lung.',
        ],
      },
      {
        heading: 'Radiographic signs and sensitivity',
        points: [
          'Blunted costophrenic angle, meniscus sign in large effusions, fluid in fissures, and mediastinal shift away from very large effusions.',
          'Erect PA/AP can miss <300 ml; lateral view detects >100 ml in the posterior costophrenic angle; supine films may miss large effusions because fluid layers posteriorly; ultrasound detects very small amounts.',
          'Neither CXR nor US can tell transudate from exudate, pus, blood or chyle.',
        ],
      },
      {
        heading: 'Loculated and fissural fluid',
        points: [
          'Loculated effusions do not layer dependently and can mimic pleural masses; causes: scarring, empyema, post-surgical lung distortion.',
          'Interlobar fluid is classically in heart failure; typical appearance is an elongated opacity along the fissure with tapered ends (“pseudotumour”). CT is usually not needed unless it persists after heart-failure treatment.',
        ],
      },
    ],
    pearls: ['Lateral CXR is more sensitive than PA for small effusions.', 'Mediastinal shift AWAY from a huge effusion vs TOWARD a collapsed lung.'],
    keywords: ['effusion', 'meniscus', 'loculated', 'fissure', 'transudate', 'exudate'],
  },
  {
    slug: 'pneumothorax',
    title: 'Pneumothorax',
    module: 'Pleura',
    pages: '68–70',
    summary: 'Air in the pleural space; recognise the visceral pleural line, the supine deep-sulcus sign and the emergency of tension.',
    sections: [
      {
        heading: 'Causes and signs',
        points: [
          'Causes: trauma (with rib fractures), percutaneous lung biopsy, malignancy (e.g. osteosarcoma metastases), emphysema/honeycomb lung, spontaneous (tall thin adolescents, smokers).',
          'Visceral pleural line: the lung edge is outlined by air; no lung markings beyond it. Usually seen on an inspiratory erect PA film; a small pneumothorax can look larger on an expiratory film.',
          'Erect: small pneumothorax is typically at the apex. Supine: the only sign may be a deep, abnormally lucent costophrenic sulcus (“deep sulcus sign”).',
        ],
      },
      {
        heading: 'Tension pneumothorax',
        points: [
          'Air keeps entering the pleural space and cannot escape, progressively compressing the lung.',
          'CXR: mediastinum displaced AWAY from the pneumothorax, depressed hemidiaphragm, wider rib spaces on the affected side, expanded hemithorax.',
        ],
      },
    ],
    pearls: ['A tension pneumothorax is a clinical emergency — do not delay treatment for imaging when the clinical picture is clear.'],
    keywords: ['pneumothorax', 'deep sulcus', 'tension', 'visceral pleura'],
  },
  {
    slug: 'pleural-thickening',
    title: 'Pleural thickening, plaques and malignant pleural disease',
    module: 'Pleura',
    pages: '71–74',
    summary: 'Calcified plaques usually mean asbestos (or old TB/empyema/haemothorax); nodular thickening with effusion suggests malignancy.',
    sections: [
      {
        heading: 'Pleural plaques',
        points: [
          'Plaques arise from the parietal pleura, usually lower chest/diaphragmatic pleura, and are the commonest manifestation of asbestos exposure; calcification common.',
          'CXR: pleural-based convex opacities (when seen en face poorly defined), “holly-leaf” edges, calcification; costophrenic angles and apices are usually spared.',
          'Most are asymptomatic, benign and need no treatment or follow-up. CT is far more sensitive/specific (quadrangular thickenings ± calcification).',
          'Other causes of calcified plaque: tuberculosis, empyema, haemothorax.',
        ],
      },
      {
        heading: 'Malignant pleural disease',
        points: [
          'Most pleural malignancies are metastases (lung, breast, ovary, lymphoma); metastases are commoner than mesothelioma.',
          'Features: pleural effusion (often the first sign) and nodular pleural thickening, possibly with mediastinal pleural involvement.',
        ],
      },
    ],
    pearls: ['Pleural plaques are markers of asbestos exposure, not of malignancy.'],
    keywords: ['plaque', 'asbestos', 'mesothelioma', 'pleural metastases'],
  },
]
