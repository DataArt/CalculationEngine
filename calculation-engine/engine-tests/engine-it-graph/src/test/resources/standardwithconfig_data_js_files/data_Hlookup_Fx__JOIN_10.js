var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd84f6629-e6e5-4501-8ec5-3c74fdf3fd0c', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: d84f6629-e6e5-4501-8ec5-3c74fdf3fd0c<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: 'ab52c1ad-a115-4a4e-82b3-07fd67e6b219', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: ab52c1ad-a115-4a4e-82b3-07fd67e6b219<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '925ace26-5ad6-4852-9dee-2a1ad115d233', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 925ace26-5ad6-4852-9dee-2a1ad115d233<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: '74e23b5c-e407-41c9-8502-e21b1e857639', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 74e23b5c-e407-41c9-8502-e21b1e857639<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'},
{id: 'f58bdbde-cdc7-4afa-a1a8-f963be6e6054', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: f58bdbde-cdc7-4afa-a1a8-f963be6e6054<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@400df2b3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab52c1ad-a115-4a4e-82b3-07fd67e6b219', to: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94'},
{from: '925ace26-5ad6-4852-9dee-2a1ad115d233', to: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94'},
{from: 'd84f6629-e6e5-4501-8ec5-3c74fdf3fd0c', to: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94'},
{from: 'f58bdbde-cdc7-4afa-a1a8-f963be6e6054', to: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94'},
{from: '9bcc948e-3ca6-4aa3-a8c7-a11358e3bc94', to: '74e23b5c-e407-41c9-8502-e21b1e857639'}
                            ]);