import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmerica, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alazhary',
  templateUrl: './alazhary.component.html',
  styleUrls: ['./alazhary.component.scss'],
})
export class AlazharyComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  tests: any[] = [
    { code: '438', name: '1 hour post pranddial blood glucose', price: '10' },
    { code: '94', name: '17-Ketosteroids', price: '75' },

    { code: '93', name: '17-OH-Progesterone', price: '65' },

    { code: '16', name: '24 hrs Protein in urine', price: '15' },
    { code: '126', name: '5-hydroxyindol acetic acid (5-HIAA)', price: '150' },
    { code: '32', name: 'A/G Ratio', price: '30' },
    { code: '268', name: 'ABG Test', price: '300' },
    { code: '3', name: 'Acetone in urine', price: '10' },
    { code: '359', name: 'Acid fast Stain for Sputum', price: '45' },
    { code: '361', name: 'Acid fast Stain for Urine', price: '45' },
    { code: '108', name: 'ACTH', price: '110' },

    { code: '160', name: 'Activated protin-C resistance', price: '130' },
    { code: '19', name: 'Albumine/Creatinine Ratio', price: '90' },

    { code: '387', name: 'Alcohol', price: '25' },
    { code: '369', name: 'Aldosterone', price: '200' },

    { code: '112', name: 'Alpha-Fetoprotein', price: '110' },
    { code: '296', name: 'AMA (IFA)', price: '200' },
    { code: '382', name: 'Amphetamine', price: '25' },
    { code: '69', name: 'Amylase in Urine', price: '30' },
    { code: '210', name: 'ANA ( ELISA)', price: '150' },

    { code: '464', name: 'ANA (IFA) ', price: '150' },
    { code: '300', name: 'ANCA(P&C)', price: '200' },
    { code: '92', name: 'Androstenedione', price: '125' },

    { code: '462', name: 'Anti DGP IgA (Anti-deamidated', price: '260' },
    { code: '303', name: 'Anti-Cardiolioin IgM', price: '80' },
    { code: '302', name: 'Anti-Cardiolipin IgG', price: '80' },
    { code: '317', name: 'Anti-CCP', price: '200' },
    { code: '364', name: 'Anti-diuretic hormone (ADH)', price: '240' },
    { code: '288', name: 'Anti-DNA(L.E Cells)', price: '20' },
    { code: '287', name: 'Anti-DNA.(d.s)', price: '150' },

    { code: '325', name: 'Anti-histones', price: '130' },
    { code: '315', name: 'Anti-Islet cell Ab(ICA)', price: '75' },
    { code: '324', name: 'Anti-jo-I', price: '90' },
    { code: '299', name: 'Anti-Keratin-Ab (AKA)', price: '100' },
    { code: '110', name: 'Anti-mullarian H (AMH)', price: '350' },

    { code: '304', name: 'Antiphospholipid IgG', price: '65' },
    { code: '305', name: 'Anti-phospholipid-IgM', price: '80' },

    { code: '191', name: 'Anti-Plateletes -Ab', price: '200' },
    { code: '326', name: 'Anti-Ribosomal RNP', price: '95' },
    { code: '320', name: 'Anti-RNP', price: '85' },
    { code: '321', name: 'Anti-Smith (Sm)', price: '90' },
    { code: '306', name: 'Anti-Sperm Ab-IgG', price: '125' },
    { code: '307', name: 'Anti-sperm Ab-IgM', price: '125' },
    { code: '308', name: 'Anti-Sperm-Ab-IgA', price: '125' },
    { code: '322', name: 'Anti-ss-A/Ro', price: '90' },
    { code: '323', name: 'Anti-ss-B/La', price: '90' },
    { code: '159', name: 'Anti-Thrombin III', price: '150' },
    { code: '319', name: 'ASCA-IgA', price: '210' },
    { code: '318', name: 'ASCA-IgG', price: '210' },
    { code: '297', name: 'ASMA (IFA)', price: '130' },
    { code: '206', name: 'ASO ( Latex )', price: '70' },
    { code: '215', name: 'ASO ( Nephelometric )', price: '50' },
    { code: '186', name: 'B2-microglobulin', price: '60' },
    { code: '381', name: 'Barbiturates', price: '25' },
    { code: '407', name: 'BEecf', price: '35' },
    { code: '187', name: 'Bence jonce protein', price: '25' },
    { code: '391', name: 'Benzodiazepines', price: '25' },
    { code: '117', name: 'B-HCG', price: '100' },

    { code: '242', name: 'Biological Fluid Examination', price: '200' },
    { code: '133', name: 'Bleeding Time', price: '10' },
    { code: '33', name: 'Blood ammonia', price: '120' },

    { code: '275', name: 'Blood Culture', price: '180' },
    { code: '132', name: 'Blood Group', price: '15' },
    { code: '240', name: 'Blood Sugar Curve', price: '110' },
    { code: '13', name: 'Blood Urea', price: '35' },

    { code: '236', name: 'Bone Marrow', price: '100' },
    { code: '414', name: 'Borrelia burgdorferi IgG', price: '450' },

    { code: '415', name: 'Borrelia burgdorferi IgM', price: '450' },

    { code: '416', name: 'Brucella IgG (ELISA)', price: '170' },
    { code: '417', name: 'Brucella IgM (ELISA)', price: '170' },
    { code: '290', name: 'Brucella Test', price: '70' },
    { code: '418', name: 'Brucella test', price: '90' },
    { code: '394', name: 'BUN', price: '30' },
    { code: '419', name: 'Ca 19.9', price: '70' },
    { code: '118', name: 'Ca 19.9', price: '120' },
    { code: '420', name: 'Ca 242', price: '9' },
    { code: '119', name: 'Ca125', price: '70' },
    { code: '120', name: 'Ca15.3', price: '80' },
    { code: '121', name: 'Calcitonin', price: '250' },
    { code: '243', name: 'Calculus Test', price: '25' },

    { code: '328', name: 'Calprotectin in Stool', price: '250' },

    { code: '383', name: 'Cannabinoids', price: '25' },
    { code: '373', name: 'Carbamazepine (Tegratol)', price: '100' },
    { code: '366', name: 'Catecholamin ( Urine )', price: '450' },

    { code: '365', name: 'Catecholamines (In Blood)', price: '350' },

    { code: '230', name: 'CBC (Complete  Blood Picture)', price: '60' },
    { code: '113', name: 'CEA', price: '100' },
    { code: '188', name: 'Ceruloplasmin', price: '100' },

    { code: '134', name: 'Clooting Time', price: '10' },
    { code: '347', name: 'CMV IgG (ELISA)', price: '70' },

    { code: '348', name: 'CMV IgM (ELISA)', price: '70' },

    { code: '385', name: 'Cocaine', price: '25' },
    { code: '181', name: 'Cold agglutinins', price: '50' },
    { code: '179', name: 'Comllement (C4)', price: '70' },
    { code: '178', name: 'Complement (C3)', price: '70' },
    { code: '226', name: 'Complete Stool Examination', price: '15' },
    { code: '279', name: 'Complete Urine & Stool Analysis', price: '15' },
    { code: '225', name: 'Complete Urine Examination', price: '15' },
    { code: '466', name: 'convoys', price: '6000' },
    { code: '465', name: 'Copper in urine', price: '130' },

    { code: '256', name: 'COVID-19 Virus Qualitative RT PCR', price: '700' },
    { code: '100', name: 'C-Peptide (Fasting)', price: '130' },
    { code: '101', name: 'C-Peptide (P.P)', price: '120' },
    { code: '62', name: 'CPK', price: '40' },

    { code: '63', name: 'CPK-MB', price: '150' },
    { code: '17', name: 'Creatinine Clearance', price: '80' },

    { code: '207', name: 'C-RP ( Latex )', price: '50' },
    { code: '216', name: 'C-RP ( Nephelometric)', price: '50' },
    { code: '180', name: 'Cryoglobulin', price: '40' },
    { code: '251', name: 'Culture', price: '110' },
    { code: '234', name: 'Culture & Sensitivity', price: '80' },
    { code: '376', name: 'Cyclosporin(Sandimmune)', price: '200' },
    { code: '128', name: 'CYFRA 21', price: '130' },
    { code: '154', name: 'D-Dimer', price: '250' },
    { code: '109', name: 'DHEA', price: '110' },

    { code: '95', name: 'DHEA-S', price: '130' },

    { code: '380', name: 'Diazepam', price: '25' },
    { code: '372', name: 'Digoxin', price: '50' },
    { code: '91', name: 'Dihydrotestosterone(DHT)', price: '200' },

    { code: '163', name: "Direct Comb's test", price: '30' },
    { code: '283', name: 'Dopamine B-Hydroxlase', price: '130' },
    { code: '423', name: 'Double test (PAPP - A + Free BHCG )', price: '150' },
    { code: '424', name: 'EBV IgG', price: '195' },
    { code: '425', name: 'EBV IgM', price: '195' },
    { code: '339', name: 'Entamoeba histolytica Ab', price: '50' },
    { code: '340', name: 'Entamoeba histolytica-Ag', price: '50' },
    { code: '212', name: 'ESR 1st hour', price: '30' },
    { code: '248', name: 'Examination of Prostatic Discharge', price: '25' },
    { code: '115', name: 'F.PSA', price: '110' },

    { code: '168', name: 'Factor II', price: '80' },
    { code: '172', name: 'Factor IX', price: '70' },
    { code: '169', name: 'Factor V', price: '150' },
    { code: '170', name: 'Factor VII', price: '80' },
    { code: '171', name: 'Factor VIII', price: '70' },
    { code: '173', name: 'Factor X', price: '80' },
    { code: '174', name: 'Factor XI', price: '80' },
    { code: '175', name: 'Factor XII', price: '250' },
    { code: '176', name: 'Factor XII', price: '250' },
    { code: '337', name: 'Faschiola-Ab', price: '90' },
    { code: '1', name: 'Fasting Blood Glucose', price: '15' },

    { code: '152', name: 'Fibrinogen', price: '40' },
    { code: '153', name: 'Fibrinogen Degradation product ', price: '55' },
    { code: '343', name: 'Filaria-Ag', price: '30' },
    { code: '129', name: 'Free B-HCG', price: '70' },
    { code: '413', name: 'Free cortisol', price: '120' },

    { code: '158', name: 'Free Protin S', price: '125' },
    { code: '77', name: 'Free T3', price: '70' },

    { code: '78', name: 'Free T4', price: '70' },

    { code: '244', name: 'Fresh Prostatic Smear', price: '10' },
    { code: '83', name: 'FSH', price: '70' },

    { code: '80', name: 'FTI', price: '70' },
    { code: '151', name: 'G6PDH', price: '110' },
    { code: '412', name: 'GFR', price: '70' },
    { code: '246', name: 'GFR', price: '35' },
    { code: '2', name: 'Glucose in urine', price: '10' },
    { code: '5', name: 'Glucose in urine', price: '10' },
    { code: '8', name: 'Glucose in urine', price: '10' },
    { code: '107', name: 'Growth homone (after exercise)', price: '75' },

    { code: '106', name: 'Growth hormone (Basal)', price: '75' },

    { code: '411', name: 'H.Pylori-Ab in blood ', price: '50' },

    { code: '354', name: 'H.Pylori-Ag (In Stool )', price: '100' },

    { code: '355', name: 'H.Pylori-IgA (in Stool)', price: '80' },
    { code: '352', name: 'H.Pylori-IgG', price: '40' },
    { code: '353', name: 'H.Pylori-IgM', price: '80' },
    { code: '190', name: "Ham's Test", price: '50' },
    { code: '203', name: 'HAV - IgM', price: '70' },

    { code: '204', name: 'HAV-Ab', price: '70' },

    { code: '135', name: 'HB', price: '25' },
    { code: '238', name: 'Hb Electrophoresis', price: '190' },
    { code: '11', name: 'HbA1C', price: '100' },

    { code: '196', name: 'HBcAb (Elisa)', price: '45' },
    { code: '197', name: 'HBeAb(Elisa)', price: '45' },
    { code: '198', name: 'HBeAg(Elisa) ', price: '45' },
    { code: '195', name: 'HBs-Ab (Elisa)', price: '70' },
    { code: '194', name: 'HBs-Ag (ELisa)', price: '60' },

    { code: '428', name: 'HCo3', price: '35' },
    { code: '193', name: 'HCV-Ab (Elisa )', price: '60' },

    { code: '200', name: 'HCV-IgM', price: '100' },
    { code: '42', name: 'HDL-Cholesterol', price: '40' },

    { code: '140', name: 'Hematocrit (Ht)', price: '10' },

    { code: '429', name: 'Herpes simplex 1+2 IgG', price: '50' },
    { code: '430', name: 'Herpes simplex 1+2 IgG', price: '50' },
    { code: '202', name: 'HIV - Ab', price: '80' },
    { code: '431', name: 'HIV - Ab', price: '70' },
    { code: '432', name: 'HOMA - IR', price: '130' },
    { code: '189', name: 'Homocysteine', price: '270' },
    { code: '349', name: 'HSV 1+2 IgG', price: '50' },

    { code: '350', name: 'HSV 1+2 IgM', price: '35' },

    { code: '338', name: 'Hydatid-Ab', price: '30' },
    { code: '433', name: 'Il-6 (Interleuken-6)', price: '400' },
    { code: '184', name: 'Immunoglobulin-A (IgA)', price: '65' },
    { code: '182', name: 'Immunoglobulin-G (IgG)', price: '85' },
    { code: '183', name: 'Immunoglobulin-M (IgM)', price: '50' },
    { code: '164', name: "Indirect Comb's test", price: '60' },
    { code: '459', name: 'Inhibin B ', price: '950' },

    { code: '99', name: 'Insulin like growth factor-1(IGF-1)', price: '250' },

    { code: '314', name: 'Insulin-Ab', price: '130' },
    { code: '460', name: 'Intact parathormone (PTH 1 - 84 )', price: '140' },
    { code: '55', name: 'Ionized Calcium', price: '50' },
    { code: '439', name: 'L1', price: '30' },
    { code: '440', name: 'L11', price: '30' },
    { code: '441', name: 'L1111111', price: '30' },
    { code: '443', name: 'L7 - OH-Progesterone', price: '90' },

    { code: '442', name: 'L7-Ketosteroids', price: '80' },

    { code: '329', name: 'Lactoferrin in Stool', price: '125' },
    { code: '61', name: 'LDH', price: '70' },

    { code: '43', name: 'LDL-Cholestero', price: '20' },

    { code: '84', name: 'LH', price: '75' },

    { code: '264', name: 'Lipid profile', price: '100' },
    { code: '263', name: 'Lipid profile (with Total Lipids)', price: '100' },
    { code: '377', name: 'Lithium', price: '30' },
    { code: '298', name: 'LKM-Ab', price: '170' },
    { code: '155', name: 'Lupus anticoagulant', price: '170' },

    { code: '342', name: 'Malaria film', price: '15' },
    { code: '341', name: 'Malaria-Ag', price: '30' },
    { code: '389', name: 'Mariguana', price: '25' },
    { code: '367', name: 'Metanephrine', price: '130' },
    { code: '386', name: 'Methadone', price: '25' },
    { code: '214', name: 'Microalbuminurea', price: '60' },
    { code: '408', name: 'Milk', price: '120' },
    { code: '409', name: 'Milk (cow)', price: '120' },
    { code: '231', name: 'Myelogram', price: '150' },
    { code: '127', name: 'Neuron specific enolase (NSE)', price: '130' },
    { code: '10', name: 'O Solivan Test', price: '15' },
    { code: '286', name: 'Occult Blood', price: '120' },
    { code: '384', name: 'Opiate (morphine, Heroin)', price: '25' },
    { code: '162', name: 'Osmotic fragility', price: '35' },
    { code: '34', name: 'p', price: '25' },
    { code: '261', name: 'P.T.T', price: '50' },
    { code: '71', name: 'Pancreatic amylase in Urine', price: '35' },
    { code: '247', name: 'Pathology', price: '650' },
    { code: '410', name: 'Pco2', price: '35' },
    { code: '241', name: 'PCR', price: '400' },
    { code: '421', name: 'PCR FMF', price: '1000' },
    { code: '422', name: 'PCR for 21 -B hydroxylase', price: '1' },
    { code: '434', name: 'PCR for factor V leiden Gene mutatio', price: '500' },
    { code: '435', name: 'PCR for HLA-DQ2/DQ8', price: '950' },
    { code: '436', name: 'PCR for MTHFR', price: '700' },
    { code: '437', name: 'PCR for prothrombin gene mutation', price: '700' },
    { code: '448', name: 'PCT-Q (Procalcitonin)', price: '300' },

    { code: '449', name: 'PH ', price: '35' },
    { code: '390', name: 'Phenyl Cyclidine (PCP)', price: '25' },
    { code: '375', name: 'Phenytion (Epanutin)', price: '50' },
    { code: '116', name: 'PIVKA II', price: '520' },
    { code: '138', name: 'Plateletes', price: '40' },
    { code: '450', name: 'PO2', price: '35' },

    { code: '4', name: 'Post Prandial Blood Glucose', price: '15' },
    { code: '229', name: 'Pregnancy (Serum)', price: '30' },
    { code: '228', name: 'Pregnancy (Urine)', price: '25' },
    { code: '66', name: 'Pro-BNP', price: '380' },
    { code: '86', name: 'Progesterone', price: '75' },

    { code: '85', name: 'Prolactin', price: '75' },

    { code: '451', name: 'Protein Electrophoresis', price: '80' },
    { code: '20', name: 'Protein/Creatnine Ratio', price: '90' },

    { code: '141', name: 'Prothrombine time', price: '50' },
    { code: '156', name: 'Protin C', price: '200' },
    { code: '157', name: 'Protin S', price: '200' },
    { code: '452', name: 'PRP', price: '100' },
    { code: '114', name: 'PSA', price: '110' },
    { code: '81', name: 'PTH (Parathormone)', price: '130' },
    { code: '144', name: 'PTT', price: '50' },
    { code: '277', name: 'Pus Culture', price: '120' },
    { code: '453', name: 'Pyruvate', price: '200' },
    { code: '454', name: 'QuantiFERON ', price: '700' },
    { code: '455', name: 'QuantiFERON Plus', price: '700' },
    { code: '7', name: 'Randam Blood Glucose', price: '15' },
    { code: '137', name: 'RBCs', price: '15' },

    { code: '368', name: 'Renin', price: '300' },

    { code: '139', name: 'Reticulocyte', price: '80' },

    { code: '208', name: 'RF ( Latex )', price: '50' },
    { code: '217', name: 'RF (Nephelometric)', price: '50' },
    { code: '131', name: 'Rh ', price: '15' },
    { code: '426', name: 'Ristocetin', price: '350' },
    { code: '209', name: 'Rose Waaler (RW)', price: '35' },
    { code: '291', name: 'RPR', price: '100' },
    { code: '345', name: 'Rubella IgG', price: '50' },

    { code: '346', name: 'Rubella IgM', price: '50' },

    { code: '88', name: 'S. Estriol (E3)', price: '170' },

    { code: '89', name: 'S. Testosterone', price: '75' },

    { code: '15', name: 'S. Uric acid', price: '35' },

    { code: '122', name: 'S.Acid phosphatase', price: '20' },

    { code: '29', name: 'S.Albumin', price: '30' },

    { code: '50', name: 'S.Aldolase', price: '60' },
    { code: '24', name: 'S.Alk.Phosphatase', price: '35' },

    { code: '68', name: 'S.Amylase', price: '70' },

    { code: '282', name: 'S.Amyloid-A', price: '240' },
    { code: '27', name: 'S.Bilirubin (Direct)', price: '35' },
    { code: '37', name: 'S.Bilirubin (Direct)', price: '35' },
    { code: '26', name: 'S.Bilirubin (Total)', price: '35' },
    { code: '36', name: 'S.Bilirubin (Total) Newborn', price: '35' },
    { code: '40', name: 'S.Cholesterol', price: '35' },

    { code: '47', name: 'S.Cholinesterase', price: '70' },
    { code: '59', name: 'S.Cholride', price: '20' },
    { code: '58', name: 'S.Copper', price: '60' },

    { code: '104', name: 'S.Cortisol (Am)', price: '110' },
    { code: '105', name: 'S.Cortisol (Pm)', price: '110' },
    { code: '14', name: 'S.Creatinine', price: '35' },

    { code: '87', name: 'S.Estradiol (E2)', price: '80' },

    { code: '148', name: 'S.Ferritin', price: '100' },

    { code: '90', name: 'S.Free Testosterone', price: '140' },

    { code: '102', name: 'S.Fructosamine', price: '60' },

    { code: '25', name: 'S.GGT', price: '40' },

    { code: '30', name: 'S.Globulin', price: '30' },
    { code: '23', name: 'AST', price: '35' },

    { code: '22', name: 'ALT', price: '35' },

    { code: '150', name: 'S.Haptoglobin', price: '50' },
    { code: '98', name: 'S.Insulin ( Post Prandial)', price: '110' },
    { code: '97', name: 'S.Insulin (Fasting)', price: '110' },
    { code: '146', name: 'S.Iron', price: '70' },
    { code: '48', name: 'S.Lactate', price: '80' },
    { code: '284', name: 'S.Leptin', price: '75' },

    { code: '72', name: 'S.Lipase', price: '70' },
    { code: '57', name: 'S.Magnesium', price: '50' },
    { code: '49', name: 'S.Myoglobin', price: '70' },

    { code: '70', name: 'S.Pancreatic amylase', price: '50' },

    { code: '56', name: 'S.Phosphorous', price: '50' },

    { code: '53', name: 'S.Potassium (K+)', price: '50' },

    { code: '123', name: 'S.Prostatic acid phosphatase', price: '35' },
    { code: '52', name: 'S.Sodium (Na+)', price: '50' },

    { code: '125', name: 'S.Squamous cell carcinoma-Antigen', price: '350' },
    { code: '75', name: 'S.T4', price: '60' },
    { code: '124', name: 'S.Thyroglobulin', price: '130' },
    { code: '149', name: 'S.Transferrin', price: '80' },
    { code: '41', name: 'S.Triglceride', price: '35' },

    { code: '335', name: 'Schistosomal-Ab (ELISA)', price: '60' },
    { code: '334', name: 'Schistosomal-Ab (IHA)', price: '100' },
    { code: '336', name: 'Schistosomal-Ag In Urine', price: '90' },
    { code: '232', name: 'Semen', price: '15' },
    { code: '250', name: 'Semen Analysis', price: '20' },
    { code: '393', name: 'Semen By CASA', price: '120' },
    { code: '378', name: 'Serolimus (Rapamune)', price: '350' },
    { code: '161', name: 'Sickling test', price: '20' },
    { code: '444', name: 'SO2', price: '40' },
    {
      code: '445',
      name: 'Soluble liver antigen auto - antibody',
      price: '300',
    },
    { code: '278', name: 'Specimen Culture', price: '80' },
    { code: '270', name: 'Sputum Culture', price: '120' },
    { code: '271', name: 'Sputum for Acid Fast Bacilli', price: '20' },
    { code: '446', name: 'Staemy test', price: '180' },
    { code: '447', name: 'Stone analysis ', price: '70' },
    { code: '273', name: 'Stool Culture', price: '110' },
    { code: '227', name: 'Sugar (Fasting + Post Prandial)', price: '12' },
    { code: '235', name: 'T & D Leuc. Count', price: '30' },
    { code: '357', name: 'TB-Ab', price: '70' },
    { code: '398', name: 'test', price: '40' },
    { code: '396', name: 'test', price: '20' },
    { code: '397', name: 'test', price: '30' },
    { code: '456', name: 'Theophylline', price: '300' },
    { code: '166', name: 'Thrombin Time', price: '55' },
    { code: '457', name: 'Thrombin Time', price: '60' },
    { code: '312', name: 'Thyroid anti-microsomal Ab', price: '100' },
    { code: '311', name: 'Thyroid Anti-thyroglobulin Ab', price: '100' },
    { code: '310', name: 'Thyroid-Anti-Peroxidase Ab', price: '170' },
    { code: '147', name: 'TIBC', price: '70' },
    { code: '54', name: 'Total Calcium ', price: '50' },
    { code: '363', name: 'Total IgE', price: '75' },
    { code: '45', name: 'Total Lipid', price: '110' },
    { code: '458', name: 'Total Metanephrine', price: '310' },
    { code: '31', name: 'Total Protein', price: '40' },
    { code: '331', name: 'Toxoplasma -Ab (IHA)', price: '30' },
    { code: '332', name: 'Toxoplasma-IgG (ELISA)', price: '50' },
    { code: '333', name: 'Toxoplasma-IgM (ELISA)', price: '50' },
    { code: '293', name: 'TPHA', price: '20' },
    { code: '388', name: 'Tramadol', price: '40' },
    { code: '65', name: 'Troponin-I', price: '200' },
    { code: '64', name: 'Troponin-T', price: '120' },
    { code: '76', name: 'TSH', price: '70' },
    { code: '79', name: 'T-Uptake', price: '45' },
    { code: '401', name: 'Urine 24 hours', price: '50' },
    { code: '274', name: 'Urine Culture', price: '120' },
    { code: '262', name: 'Urine specific gravity', price: '10' },
    { code: '374', name: 'Valporic acid (Depakine)', price: '80' },
    { code: '292', name: 'VDRL', price: '15' },
    { code: '402', name: 'vitamin B12', price: '130' },
    { code: '403', name: 'vitamin D (25-oh vitamin Dtotal )', price: '270' },
    { code: '44', name: 'VLDL', price: '10' },
    { code: '370', name: 'VMA', price: '55' },
    { code: '167', name: 'Von willebrand factor', price: '350' },
    { code: '404', name: 'Von willebrand factor (activity)', price: '450' },
    {
      code: '405',
      name: 'Von willebrand factor (concentration)',
      price: '450',
    },
    { code: '136', name: 'WBCs', price: '15' },
    { code: '294', name: 'Weil-Felix Test', price: '40' },
    { code: '233', name: 'Widal', price: '60' },
    { code: '395', name: 'XYZ', price: '99' },
    { code: '358', name: 'Z.N Stain for Sputum', price: '45' },
    { code: '360', name: 'Z.N Stain for Urine', price: '45' },
    { code: '406', name: 'zinc', price: '100' },
  ];
  request: any[] = [];
  remove(index: any) {
    this.request.splice(index, 1);
    this.calc();
    let remove = new Audio('../../../assets/delete.mp3');
    remove.play();
  }
  total: number = 0;
  calc() {
    let total = 0;
    this.request.forEach((ele) => {
      total += +ele.price;
    });
    this.total = total;
  }
  add(test: any) {
    this.request.push(test);
    this.calc();
    let add = new Audio('../../../assets/add.mp3');
    add.play();
    this.searchCode = '';
    this.searchName = '';
  }
  addWithEnter(btn: any, value: any, type: any) {
    if (btn.keyCode == 13) {
      let ele = this.tests.find((e) => {
        if (type == 'code') {
          return e.code == value;
        }
        return e.name.toLocaleLowerCase().includes(value);
      });

      if (ele && !this.isDublicate(ele, this.request)) {
        this.add(ele);
        this.calc();
      }
    }
  }
  isDublicate(ele: any, arr: any[]) {
    let isExist = arr.filter((arrEle) => {
      return arrEle.code == ele.code;
    });
    if (isExist.length) {
      return true;
    }
    return false;
  }
  deleteIcon = faTrashCan;
  addIcon = faPlus;
  searchCode: any = '';
  searchName: any = '';
}
