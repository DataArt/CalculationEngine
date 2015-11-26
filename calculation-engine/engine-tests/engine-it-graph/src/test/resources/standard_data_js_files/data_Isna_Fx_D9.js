var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aabbcbcf-2e3b-4960-99a3-6fb7e3aadbc1', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Alias: null<br>Value: #N/A<br>Type: FUNCTION<br>Id: aabbcbcf-2e3b-4960-99a3-6fb7e3aadbc1<br>Formula Expression: Formula String: ISNA(ISNA(D6)); Formula Values: ISNA(ISNA(#N/A)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: '41a12f2f-36d6-44b3-8e46-c63d6a071ebe', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Alias: null<br>Value: #N/A<br>Type: FUNCTION<br>Id: 41a12f2f-36d6-44b3-8e46-c63d6a071ebe<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: '6dfb19b9-c67c-4704-8579-f8da091a1061', label: 'D8\n#N/A', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 6dfb19b9-c67c-4704-8579-f8da091a1061<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: #N/A ISNA ; Ptgs: D6 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: '214b04ae-8354-4133-a132-178f68f49eed', label: 'D9\n#N/A', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 214b04ae-8354-4133-a132-178f68f49eed<br>Formula Expression: Formula String: ISNA(ISNA(D6)); Formula Values: ISNA(ISNA(#N/A)); Formula Ptg: #N/A ISNA  ISNA ; Ptgs: D6 ISNA  ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: 'bbc91a1c-4f14-4733-a61b-3cbfe6da1255', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: bbc91a1c-4f14-4733-a61b-3cbfe6da1255<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: '18f3f847-bf71-4dca-920e-b19a55b490ba', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: 18f3f847-bf71-4dca-920e-b19a55b490ba<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'},
{id: '400e6a19-c465-4096-ba99-9c3ac0846116', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Alias: null<br>Value: #N/A<br>Type: FUNCTION<br>Id: 400e6a19-c465-4096-ba99-9c3ac0846116<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@42b28ff1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '18f3f847-bf71-4dca-920e-b19a55b490ba', to: '400e6a19-c465-4096-ba99-9c3ac0846116'},
{from: '41a12f2f-36d6-44b3-8e46-c63d6a071ebe', to: '6dfb19b9-c67c-4704-8579-f8da091a1061'},
{from: '400e6a19-c465-4096-ba99-9c3ac0846116', to: '6dfb19b9-c67c-4704-8579-f8da091a1061'},
{from: 'bbc91a1c-4f14-4733-a61b-3cbfe6da1255', to: '41a12f2f-36d6-44b3-8e46-c63d6a071ebe'},
{from: 'aabbcbcf-2e3b-4960-99a3-6fb7e3aadbc1', to: '214b04ae-8354-4133-a132-178f68f49eed'},
{from: '6dfb19b9-c67c-4704-8579-f8da091a1061', to: 'aabbcbcf-2e3b-4960-99a3-6fb7e3aadbc1'}
                            ]);