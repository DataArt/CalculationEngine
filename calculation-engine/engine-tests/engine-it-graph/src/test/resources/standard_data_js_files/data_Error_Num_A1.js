var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fa37c820-44ac-46fd-ae2f-32c50c7a4453', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: fa37c820-44ac-46fd-ae2f-32c50c7a4453<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@546ccad7'},
{id: 'cc03188d-87bc-4649-a98d-1a5c55b9ae66', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: cc03188d-87bc-4649-a98d-1a5c55b9ae66<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@546ccad7'},
{id: 'f8e56ae4-65ec-46f6-b8c2-a1174b462bd0', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: f8e56ae4-65ec-46f6-b8c2-a1174b462bd0<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@546ccad7'},
{id: '1efb2146-f40a-49ec-94c2-de7904bacafe', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 1efb2146-f40a-49ec-94c2-de7904bacafe<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@546ccad7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1efb2146-f40a-49ec-94c2-de7904bacafe', to: 'fa37c820-44ac-46fd-ae2f-32c50c7a4453'},
{from: 'cc03188d-87bc-4649-a98d-1a5c55b9ae66', to: 'fa37c820-44ac-46fd-ae2f-32c50c7a4453'},
{from: 'fa37c820-44ac-46fd-ae2f-32c50c7a4453', to: 'f8e56ae4-65ec-46f6-b8c2-a1174b462bd0'}
                            ]);