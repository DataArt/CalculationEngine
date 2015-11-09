var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eee65686-2f54-493c-8e66-75d185f241d6', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: eee65686-2f54-493c-8e66-75d185f241d6<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@450b99f2'},
{id: '38f21098-03a0-4886-bab0-62776e428ae0', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 38f21098-03a0-4886-bab0-62776e428ae0<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@450b99f2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '38f21098-03a0-4886-bab0-62776e428ae0', to: 'eee65686-2f54-493c-8e66-75d185f241d6'}
                            ]);