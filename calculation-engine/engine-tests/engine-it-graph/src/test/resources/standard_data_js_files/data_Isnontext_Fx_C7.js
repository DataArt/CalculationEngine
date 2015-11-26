var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7028321a-ba88-44b9-a47d-df13f2f47139', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7028321a-ba88-44b9-a47d-df13f2f47139<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c9e07c6'},
{id: 'a85e6a87-f96e-4f5e-a0aa-a6cb2f5107b3', label: 'C7\nTRUE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a85e6a87-f96e-4f5e-a0aa-a6cb2f5107b3<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: 1.0 ISNONTEXT  ISNONTEXT ; Ptgs: A1 ISNONTEXT  ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c9e07c6'},
{id: '94770739-9a52-4842-833b-6a2f83f0ef34', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 94770739-9a52-4842-833b-6a2f83f0ef34<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: 1.0 ISNONTEXT ; Ptgs: A1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c9e07c6'},
{id: 'e34c70d3-1272-47da-9859-a63c24188419', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: e34c70d3-1272-47da-9859-a63c24188419<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c9e07c6'},
{id: '4fe0ef5f-9f3d-48cc-88e4-7b7ce3dff57e', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4fe0ef5f-9f3d-48cc-88e4-7b7ce3dff57e<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c9e07c6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7028321a-ba88-44b9-a47d-df13f2f47139', to: 'a85e6a87-f96e-4f5e-a0aa-a6cb2f5107b3'},
{from: '4fe0ef5f-9f3d-48cc-88e4-7b7ce3dff57e', to: 'e34c70d3-1272-47da-9859-a63c24188419'},
{from: 'e34c70d3-1272-47da-9859-a63c24188419', to: '94770739-9a52-4842-833b-6a2f83f0ef34'},
{from: '94770739-9a52-4842-833b-6a2f83f0ef34', to: '7028321a-ba88-44b9-a47d-df13f2f47139'}
                            ]);