var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '044ceb99-99b9-49a2-9736-18557a5d50ba', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 044ceb99-99b9-49a2-9736-18557a5d50ba<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: '45913ef1-e9a1-4e4a-aede-09afaaef8cea', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 45913ef1-e9a1-4e4a-aede-09afaaef8cea<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: 'f0a2cfd4-40a4-47da-acda-14de1254d060', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: f0a2cfd4-40a4-47da-acda-14de1254d060<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: '4ee0d438-4aaa-4f96-b425-7f29edf468d0', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 4ee0d438-4aaa-4f96-b425-7f29edf468d0<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f0a2cfd4-40a4-47da-acda-14de1254d060', to: '4ee0d438-4aaa-4f96-b425-7f29edf468d0'},
{from: '4ee0d438-4aaa-4f96-b425-7f29edf468d0', to: '45913ef1-e9a1-4e4a-aede-09afaaef8cea'},
{from: '044ceb99-99b9-49a2-9736-18557a5d50ba', to: '4ee0d438-4aaa-4f96-b425-7f29edf468d0'}
                            ]);