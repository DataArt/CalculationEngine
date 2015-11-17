var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bdd3cbfa-e8ff-4b9a-bc54-64b66b180aae', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: bdd3cbfa-e8ff-4b9a-bc54-64b66b180aae<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: '6a27e7ab-7f78-493a-9dfe-2ae9d8114bf7', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 6a27e7ab-7f78-493a-9dfe-2ae9d8114bf7<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: 'a1b0e136-ea8f-4636-9ac1-e98a51d87af5', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: a1b0e136-ea8f-4636-9ac1-e98a51d87af5<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: '7b88dbeb-e22a-4739-90dd-62613992590d', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 7b88dbeb-e22a-4739-90dd-62613992590d<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6a27e7ab-7f78-493a-9dfe-2ae9d8114bf7', to: 'bdd3cbfa-e8ff-4b9a-bc54-64b66b180aae'},
{from: 'bdd3cbfa-e8ff-4b9a-bc54-64b66b180aae', to: 'a1b0e136-ea8f-4636-9ac1-e98a51d87af5'},
{from: '7b88dbeb-e22a-4739-90dd-62613992590d', to: 'bdd3cbfa-e8ff-4b9a-bc54-64b66b180aae'}
                            ]);