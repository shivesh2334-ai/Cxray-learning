"""Builds content/images.ts from processed figures. Captions are original summaries
written for this learning app; each entry points back to the page of the ESR eBook chapter."""
import json
bank=json.load(open('/tmp/bank.json'))

def topic_of(p):
    r=[(10,10,'technique-modalities'),(11,19,'projections-quality'),(20,23,'technique-modalities'),(25,26,'systematic-approach'),
       (28,32,'normal-chestwall-pleura'),(33,46,'normal-mediastinum'),(47,50,'normal-hila-lobes'),(52,54,'silhouette-sign'),
       (56,62,'chestwall-devices-bone'),(64,67,'pleural-effusion'),(68,70,'pneumothorax'),(71,74,'pleural-thickening'),
       (76,81,'mediastinal-approach'),(82,86,'anterior-mediastinum'),(87,91,'middle-mediastinum'),(92,93,'posterior-mediastinum'),
       (95,100,'hilar-enlargement'),(102,108,'alveolar-patterns'),(109,112,'interstitial-patterns'),(113,119,'nodules-masses'),
       (120,124,'lung-cancer'),(125,126,'nodules-masses'),(127,130,'atelectasis'),(131,132,'hyperlucency-emphysema'),
       (134,138,'pulmonary-oedema'),(140,141,'pulmonary-hypertension')]
    for a,b,t in r:
        if a<=p<=b: return t
    return 'systematic-approach'

cap={
11:"Set-up of the erect PA projection: patient position, beam direction and detector distance.",
12:"PA CXR with technical-quality overlay: patient ID, side marker and rotation check (clavicle-to-spinous-process distances).",
13:"PA CXR quality check: centred trachea and rib counting for adequate inspiration.",
14:"PA CXR quality check: lung apices, costophrenic angles, diaphragm, exposure and scapular position.",
15:"Set-up of the lateral projection with central ray at the mid-axillary line.",
16:"Lateral CXR showing the quality criteria: apices, costophrenic recesses, diaphragms and sternum.",
17:"Set-up for AP supine/sitting projections used for patients who cannot stand.",
19:"PA versus AP geometry: why the heart looks larger on an AP film.",
20:"Chest CT shown in soft-tissue, bone and lung windows plus coronal/sagittal reformats.",
21:"Chest ultrasound of a right pleural effusion.",
22:"Chest MRI examples: lung nodule on T2 and an apical mass with bone destruction.",
23:"FDG PET/CT in a patient with a lung primary and a synchronous head-and-neck tumour.",
25:"Tissue density concept: metal, bone, soft tissue/fat and air on a radiograph.",
26:"A normal PA chest radiograph for practising a systematic read.",
28:"Soft tissues: symmetric chest wall, asymmetric breast shadows, nipple projections and normal fat planes.",
29:"Normal bones on the PA and lateral CXR: clavicles, scapulae, ribs and vertebral bodies.",
31:"Normal pleural contours, hemidiaphragm domes and costophrenic recesses.",
32:"Normal fissures: horizontal and oblique fissures on PA and lateral views.",
33:"Labelled normal mediastinal structures on a PA CXR.",
34:"Mediastinal contours (SVC, azygos, RA, aortic knuckle, PA, LV) and variants: azygos lobe, right aortic arch.",
35:"Normal lateral CXR with matching CT planes: pulmonary arteries, retrosternal and retrocardiac spaces.",
36:"Cardiothoracic ratio measurement on a PA CXR.",
38:"ITMIG mediastinal compartments on CT.",
39:"Mediastinal compartments on a lateral CXR (Felson versus ITMIG).",
40:"Overview of mediastinal lines, stripes and interfaces on a PA CXR.",
41:"Anterior and posterior junction lines with CT correlation.",
42:"Right and left paratracheal stripes with CT correlation.",
43:"Right and left paravertebral lines.",
44:"Azygo-oesophageal recess.",
45:"Aorto-pulmonary window and aortic-pulmonary stripe.",
46:"Para-aortic line.",
47:"Hila: normal size, symmetry and hilar point positions.",
48:"Lung lobes and segments on PA, lateral and CT images.",
50:"Lung zones and the normal upper-to-lower vessel size gradient.",
52:"Silhouette sign in the left lower chest: lingular versus lower-lobe consolidation (lateral views).",
53:"Right middle lobe versus right lower lobe consolidation and the right heart border.",
54:"Silhouette sign on the lateral CXR: why the left diaphragm fades behind the heart.",
56:"Soft tissue asymmetry: mastectomy and subcutaneous emphysema after chest-drain placement.",
58:"Multiple medical devices and foreign bodies on a single CXR.",
60:"Rib fractures: displaced, undisplaced and healing callus.",
61:"Displaced rib fracture on CXR with CT confirmation and haemorrhagic effusion.",
62:"Bone metastases and a Pancoast tumour eroding a rib.",
65:"Pleural effusion signs: meniscus, blunted angles, fluid in the fissures, massive effusion.",
66:"Loculated fluid in the oblique fissure.",
67:"Fissural (pseudotumour-like) effusions in heart failure with CT correlation.",
68:"Spontaneous pneumothorax with the visceral pleural line visible.",
69:"Deep sulcus sign (supine) and a small apical pneumothorax after biopsy.",
70:"Tension pneumothorax: mediastinal shift, depressed diaphragm, widened rib spaces.",
71:"Calcified pleural plaques (post-TB and asbestos-related).",
72:"Asbestos-related plaques with 'holly-leaf' edges and calcification.",
73:"Incidental pleural plaque on CXR with CT correlation.",
74:"Malignant pleural disease: nodular pleural thickening and effusion.",
76:"Pneumomediastinum on AP CXR and axial CT.",
77:"Widened mediastinum on PA (lymphoma) and AP (traumatic aortic rupture) films.",
79:"Distinguishing mediastinal from pulmonary masses using the angle with the lung.",
80:"Hilum overlay sign: hilar vessels seen through the mass versus obliterated.",
81:"Anterior mediastinal teratoma: PA, lateral and CT correlation.",
82:"Anterior mediastinal lymphoma with retrosternal obliteration and hilum overlay sign.",
83:"Thymoma on CT in two patients.",
84:"Mediastinal seminoma with volumetric CT reconstruction.",
85:"Teratoma including tooth and fat components on lateral CXR and CT.",
86:"Subtle anterior mediastinal lymphoma on CXR and CT.",
87:"Middle mediastinal mass with widened paratracheal stripes (lipoma).",
88:"Convex APW, mass anterior to the spine and doughnut sign.",
89:"Small cell lung cancer presenting as a middle mediastinal mass with PET/CT.",
90:"NSCLC with phrenic palsy and SVC encasement.",
91:"Hiatus hernia as a retrocardiac mass, with CT.",
92:"Posterior mediastinal paraganglioma on CXR and MRI.",
93:"Aortic aneurysm and dissection on CXR and CT.",
95:"Bilateral hilar enlargement example.",
97:"Sarcoidosis: bilateral hilar and right paratracheal nodes (1-2-3 sign) with CT.",
98:"Lymphoma with bilateral hilar enlargement and FDG-avid nodes.",
99:"Unilateral hilar enlargement from nodal metastases of lung adenocarcinoma.",
100:"Diffuse large B-cell lymphoma with unilateral hilar enlargement and lung masses.",
102:"Pulmonary acinus and secondary lobule schematic.",
104:"Alveolar opacification in lingula, right lower lobe and right upper lobe with air bronchograms.",
105:"Lobar consolidation of the left upper lobe/lingula on PA and lateral films.",
106:"Multifocal bronchopneumonia involving several lobes.",
107:"Bat-wing (perihilar) alveolar opacification.",
108:"Ground-glass opacity on CT (COVID-19 and interstitial lung disease).",
109:"Interstitial patterns: Kerley lines, nodular, reticulonodular and honeycombing.",
110:"Miliary tuberculosis: micronodular pattern on CXR and CT.",
111:"Lymphangitis carcinomatosa: reticulonodular pattern on CXR and CT.",
112:"CT interstitial patterns: reticulation, honeycombing, GGO, consolidation, micronodules, mosaic attenuation.",
113:"Nodules and masses: solitary nodule, mass, miliary nodules, metastases, cavitary GPA.",
114:"Solitary pulmonary nodule morphology: solid, non-solid and part-solid.",
115:"Benign calcification patterns in a granuloma.",
116:"Benign nodule features: perifissural location, fat, popcorn calcification.",
117:"Features suggesting malignancy: spiculation, lobulation, cavitation, pleural retraction, bubble-like lucencies.",
118:"Volume doubling time examples in benign and malignant nodules.",
121:"Growing left lower zone nodule over two years: adenocarcinoma with PET/CT.",
122:"Large squamous cell carcinoma of the left upper lobe with contralateral nodes (T4N3M1b).",
125:"Lung metastases from head-and-neck SCC with volumetry.",
126:"Granulomatosis with polyangiitis: multiple nodules, cavitary mass and effusion.",
128:"Atelectasis: left upper lobe collapse and general signs (fissure displacement, shift, rib crowding).",
129:"Right middle lobe atelectasis on PA and lateral views.",
130:"Complete lung collapse: right (tumour) and left (mucous plug) with post-treatment film.",
131:"Emphysema on CXR (hyperinflation, flat diaphragms) and CT.",
132:"Emphysema subtypes on CT: paraseptal, centrilobular, panlobular.",
135:"Vessel calibre and upper-lobe vein cephalisation in left heart failure.",
136:"Interstitial oedema: peribronchial cuffing and Kerley A/B lines.",
137:"Alveolar pulmonary oedema with bat-wing pattern.",
138:"Heart failure with effusions and cardiomegaly (lateral and AP films).",
140:"Pulmonary hypertension: dilated pulmonary arteries on PA CXR.",
141:"Pulmonary hypertension on CT by aetiology group (fibrosis, venous return anomaly, chronic thromboembolism).",
}
CT={(20,9),(20,10),(20,11),(35,34),(38,37),(73,115),(76,121),(76,122),(81,129),(83,135),(83,136),(84,138),(87,143),(90,158),(93,171),(93,174),(108,226),(110,234),(111,236),(111,237),(112,239),(112,240),(112,243),(114,252),(114,253),(114,254),(115,257),(115,258),(116,260),(116,263),(117,267),(117,268),(117,270),(125,281),(125,282),(126,290),(131,331),(132,335),(141,374)}
MRI={(22,15),(92,169)}; US={(21,14)}; PET={(23,18),(89,156),(98,182),(99,192),(99,195),(100,196),(121,278)}
DIAG={(11,1),(15,5),(17,7),(19,8),(50,74),(50,76),(102,200)}
COMBO={(41,41),(41,42),(41,43),(42,44),(43,45),(43,46),(44,47),(45,48),(45,49),(45,50),(45,51),(46,52),(48,59),(48,60),(61,89),(67,102),(71,111),(72,114),(74,117),(74,118),(84,138),(85,139),(86,140),(93,170),(93,172),(97,178),(100,198),(122,279),(23,18)}
LAT={(16,6),(35,32),(39,38),(39,39),(52,79),(52,80),(54,83),(66,99),(66,101),(89,155),(91,162),(92,168),(99,184),(105,210),(126,287),(129,320),(135,337),(138,369)}
out=[]
for p,n,w,h in bank:
    k=(p,n)
    if k in CT: m='CT'
    elif k in MRI: m='MRI'
    elif k in US: m='Ultrasound'
    elif k in PET: m='PET/CT'
    elif k in DIAG: m='Diagram'
    elif k in COMBO: m='CXR + CT'
    elif k in LAT: m='CXR lateral'
    else: m='CXR PA/AP'
    c=cap.get(p) or cap.get(max([q for q in cap if q<=p]))
    out.append(dict(id=f'p{p}-{n}',src=f'/images/p{p}-{n}.jpg',page=p,topic=topic_of(p),modality=m,caption=c,w=w,h=h))
ts="// Auto-generated by scripts/build_image_manifest.py. Captions are original summaries; figures are from the ESR Modern Radiology eBook (Chest Imaging).\nimport type { ImageItem } from '@/lib/types'\nexport const images: ImageItem[] = "+json.dumps(out,indent=1)+"\n"
open('content/images.ts','w').write(ts)
import collections
print(len(out),collections.Counter(o['modality'] for o in out))
print(collections.Counter(o['topic'] for o in out))
