var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '50f3dc42-1673-4b10-b5cb-2362eea1225a', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 50f3dc42-1673-4b10-b5cb-2362eea1225a<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'},
{id: '3638c6fb-b0be-4351-872b-64fb9613b311', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 3638c6fb-b0be-4351-872b-64fb9613b311<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'},
{id: '9d85ccc7-1c3a-48e1-9225-ee403eb78afa', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 9d85ccc7-1c3a-48e1-9225-ee403eb78afa<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '50f3dc42-1673-4b10-b5cb-2362eea1225a', to: '9d85ccc7-1c3a-48e1-9225-ee403eb78afa'},
{from: '9d85ccc7-1c3a-48e1-9225-ee403eb78afa', to: '3638c6fb-b0be-4351-872b-64fb9613b311'}
                            ]);