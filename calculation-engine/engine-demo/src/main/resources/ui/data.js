var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '510a5349-069f-4687-b649-cd9a6fd71ada', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 510a5349-069f-4687-b649-cd9a6fd71ada<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'dcec328e-0c50-4a42-a722-d00c34b94d39', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: dcec328e-0c50-4a42-a722-d00c34b94d39<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'c136dfa4-3983-4dad-aea2-e69f0331cb27', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: c136dfa4-3983-4dad-aea2-e69f0331cb27<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'ff2beb2f-a020-4001-a07b-87c7a8d76a19', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: ff2beb2f-a020-4001-a07b-87c7a8d76a19<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'e3893c37-386c-4c40-be34-fcccf575ef12', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: e3893c37-386c-4c40-be34-fcccf575ef12<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: '7cb4e1f6-8e32-4e2e-8d47-330d7bb04aa6', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 7cb4e1f6-8e32-4e2e-8d47-330d7bb04aa6<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'c8b36f25-d2a5-44fe-a089-3cbd1797cef2', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: c8b36f25-d2a5-44fe-a089-3cbd1797cef2<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: '2be6cb91-83f0-4f60-99cc-77d169a7f0ae', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 2be6cb91-83f0-4f60-99cc-77d169a7f0ae<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'},
{id: 'e496245e-39a0-4769-9dfa-b9e648530036', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: e496245e-39a0-4769-9dfa-b9e648530036<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@45312be2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ff2beb2f-a020-4001-a07b-87c7a8d76a19', to: 'c136dfa4-3983-4dad-aea2-e69f0331cb27'},
{from: 'c8b36f25-d2a5-44fe-a089-3cbd1797cef2', to: 'e3893c37-386c-4c40-be34-fcccf575ef12'},
{from: '510a5349-069f-4687-b649-cd9a6fd71ada', to: 'e496245e-39a0-4769-9dfa-b9e648530036'},
{from: '7cb4e1f6-8e32-4e2e-8d47-330d7bb04aa6', to: 'c8b36f25-d2a5-44fe-a089-3cbd1797cef2'},
{from: 'e496245e-39a0-4769-9dfa-b9e648530036', to: 'c8b36f25-d2a5-44fe-a089-3cbd1797cef2'},
{from: 'dcec328e-0c50-4a42-a722-d00c34b94d39', to: '7cb4e1f6-8e32-4e2e-8d47-330d7bb04aa6'},
{from: 'c136dfa4-3983-4dad-aea2-e69f0331cb27', to: 'c8b36f25-d2a5-44fe-a089-3cbd1797cef2'},
{from: 'e3893c37-386c-4c40-be34-fcccf575ef12', to: '2be6cb91-83f0-4f60-99cc-77d169a7f0ae'}
                            ]);