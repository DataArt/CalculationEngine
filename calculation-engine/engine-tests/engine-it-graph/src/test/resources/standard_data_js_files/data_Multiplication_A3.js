var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2fc89093-07f5-4482-b15c-7936d617d0e7', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2fc89093-07f5-4482-b15c-7936d617d0e7<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6928f576'},
{id: 'bde7ee81-8040-4794-8a85-918d8cb58cdf', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 35.0<br>Type: OPERATOR<br>Id: bde7ee81-8040-4794-8a85-918d8cb58cdf<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6928f576'},
{id: '8a130103-b792-4919-8fb8-110f5ef9afa6', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 8a130103-b792-4919-8fb8-110f5ef9afa6<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6928f576'},
{id: 'ab59ee7c-ea57-42d7-a881-a50903272fab', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: ab59ee7c-ea57-42d7-a881-a50903272fab<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6928f576'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab59ee7c-ea57-42d7-a881-a50903272fab', to: 'bde7ee81-8040-4794-8a85-918d8cb58cdf'},
{from: 'bde7ee81-8040-4794-8a85-918d8cb58cdf', to: '8a130103-b792-4919-8fb8-110f5ef9afa6'},
{from: '2fc89093-07f5-4482-b15c-7936d617d0e7', to: 'bde7ee81-8040-4794-8a85-918d8cb58cdf'}
                            ]);