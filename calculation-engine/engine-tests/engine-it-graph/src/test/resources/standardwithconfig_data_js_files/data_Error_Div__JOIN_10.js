var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8793b5c9-749d-450c-8f07-807656941694', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 8793b5c9-749d-450c-8f07-807656941694<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: '706ab4fd-b020-43bd-979e-7c3e0af474ea', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 706ab4fd-b020-43bd-979e-7c3e0af474ea<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: '8663c6f7-051a-4021-9af6-60aa48633f7a', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 8663c6f7-051a-4021-9af6-60aa48633f7a<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: '57b48c7b-70e4-47a9-85fb-bc8a3f0c0ebf', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 57b48c7b-70e4-47a9-85fb-bc8a3f0c0ebf<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8663c6f7-051a-4021-9af6-60aa48633f7a', to: '8793b5c9-749d-450c-8f07-807656941694'},
{from: '57b48c7b-70e4-47a9-85fb-bc8a3f0c0ebf', to: '8793b5c9-749d-450c-8f07-807656941694'},
{from: '8793b5c9-749d-450c-8f07-807656941694', to: '706ab4fd-b020-43bd-979e-7c3e0af474ea'}
                            ]);