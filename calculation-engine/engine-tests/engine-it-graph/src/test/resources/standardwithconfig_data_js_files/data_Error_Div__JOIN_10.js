var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a19d125c-cf7a-4f51-8f18-28cc4c421c9a', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: a19d125c-cf7a-4f51-8f18-28cc4c421c9a<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: 'a6610fc0-d502-46ab-bc61-5f001f7e8747', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: a6610fc0-d502-46ab-bc61-5f001f7e8747<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: '4a20e5b3-1aa9-4a9a-9da9-fed3a4167464', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 4a20e5b3-1aa9-4a9a-9da9-fed3a4167464<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'},
{id: 'cf6cfe55-1c54-4317-9240-76fd53a25617', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: cf6cfe55-1c54-4317-9240-76fd53a25617<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@51fa09c7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4a20e5b3-1aa9-4a9a-9da9-fed3a4167464', to: 'a19d125c-cf7a-4f51-8f18-28cc4c421c9a'},
{from: 'cf6cfe55-1c54-4317-9240-76fd53a25617', to: 'a19d125c-cf7a-4f51-8f18-28cc4c421c9a'},
{from: 'a19d125c-cf7a-4f51-8f18-28cc4c421c9a', to: 'a6610fc0-d502-46ab-bc61-5f001f7e8747'}
                            ]);