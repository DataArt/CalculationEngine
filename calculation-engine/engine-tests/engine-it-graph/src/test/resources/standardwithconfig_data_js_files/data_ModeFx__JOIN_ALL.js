var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ebbf3615-4b46-4373-a585-a5dd62b42293', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Value: 4.0<br>Type: FUNCTION<br>Id: ebbf3615-4b46-4373-a585-a5dd62b42293<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54ec8cc9'},
{id: '0152a6e4-e6cd-41ac-a1d4-2ac2fa579ef2', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 0152a6e4-e6cd-41ac-a1d4-2ac2fa579ef2<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54ec8cc9'},
{id: 'c4298496-52cf-43a1-ba27-1a7a95ace2bf', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: c4298496-52cf-43a1-ba27-1a7a95ace2bf<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54ec8cc9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c4298496-52cf-43a1-ba27-1a7a95ace2bf', to: 'ebbf3615-4b46-4373-a585-a5dd62b42293'},
{from: 'ebbf3615-4b46-4373-a585-a5dd62b42293', to: '0152a6e4-e6cd-41ac-a1d4-2ac2fa579ef2'}
                            ]);