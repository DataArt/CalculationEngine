var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '20c8d673-a679-42d3-babe-d056404c7101', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 20c8d673-a679-42d3-babe-d056404c7101<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@345cf395'},
{id: 'd7252eb8-87c9-4bee-b5a8-9064afb921ce', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: d7252eb8-87c9-4bee-b5a8-9064afb921ce<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@345cf395'},
{id: 'b0ce4729-e1a4-4034-bd48-e22e3cde71db', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: b0ce4729-e1a4-4034-bd48-e22e3cde71db<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: #REF! ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@345cf395'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '20c8d673-a679-42d3-babe-d056404c7101', to: 'd7252eb8-87c9-4bee-b5a8-9064afb921ce'},
{from: 'd7252eb8-87c9-4bee-b5a8-9064afb921ce', to: 'b0ce4729-e1a4-4034-bd48-e22e3cde71db'}
                            ]);