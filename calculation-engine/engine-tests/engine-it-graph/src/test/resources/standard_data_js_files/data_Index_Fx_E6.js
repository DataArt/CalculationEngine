var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '07e83079-a0ce-4c15-89ac-8b2920288743', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 07e83079-a0ce-4c15-89ac-8b2920288743<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70abf9b0'},
{id: 'a7367f3b-dce7-4ec2-ad75-3d71066cbbd7', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: a7367f3b-dce7-4ec2-ad75-3d71066cbbd7<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70abf9b0'},
{id: 'd0ff9c2d-223c-41de-852d-117ef1f248e3', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: d0ff9c2d-223c-41de-852d-117ef1f248e3<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70abf9b0'},
{id: '10a87af0-3fd2-447d-804e-1a2e561dc35a', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Alias: null<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 10a87af0-3fd2-447d-804e-1a2e561dc35a<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70abf9b0'},
{id: 'bdf541d0-b458-4c9b-97ad-67bb2e2b339b', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Alias: null<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: bdf541d0-b458-4c9b-97ad-67bb2e2b339b<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70abf9b0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '10a87af0-3fd2-447d-804e-1a2e561dc35a', to: '07e83079-a0ce-4c15-89ac-8b2920288743'},
{from: 'a7367f3b-dce7-4ec2-ad75-3d71066cbbd7', to: '10a87af0-3fd2-447d-804e-1a2e561dc35a'},
{from: 'd0ff9c2d-223c-41de-852d-117ef1f248e3', to: '10a87af0-3fd2-447d-804e-1a2e561dc35a'},
{from: 'bdf541d0-b458-4c9b-97ad-67bb2e2b339b', to: '10a87af0-3fd2-447d-804e-1a2e561dc35a'}
                            ]);