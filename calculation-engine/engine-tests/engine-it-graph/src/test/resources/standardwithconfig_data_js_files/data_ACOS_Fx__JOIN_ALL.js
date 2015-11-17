var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1a6ab4f9-3f6b-4730-9b25-2cb43777097d', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 1a6ab4f9-3f6b-4730-9b25-2cb43777097d<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'},
{id: '4d66c429-b886-4d48-a511-de1203d5f975', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 4d66c429-b886-4d48-a511-de1203d5f975<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'},
{id: '3c717360-cddb-4309-879d-ad69113cb7c0', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 3c717360-cddb-4309-879d-ad69113cb7c0<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3c717360-cddb-4309-879d-ad69113cb7c0', to: '1a6ab4f9-3f6b-4730-9b25-2cb43777097d'},
{from: '1a6ab4f9-3f6b-4730-9b25-2cb43777097d', to: '4d66c429-b886-4d48-a511-de1203d5f975'}
                            ]);