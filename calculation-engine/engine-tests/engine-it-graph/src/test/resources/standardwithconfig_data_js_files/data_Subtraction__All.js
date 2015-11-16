var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5c801761-58e7-4838-83f7-c124f0bace4e', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: 5c801761-58e7-4838-83f7-c124f0bace4e<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: 'ab5d45fd-49d7-475a-9d66-a6d811227263', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: ab5d45fd-49d7-475a-9d66-a6d811227263<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: 'b37d26ca-2c0c-480b-842d-93454ea4f690', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: b37d26ca-2c0c-480b-842d-93454ea4f690<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: '97e02e5b-f823-41c9-9194-1903d7fafb5c', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 97e02e5b-f823-41c9-9194-1903d7fafb5c<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab5d45fd-49d7-475a-9d66-a6d811227263', to: '5c801761-58e7-4838-83f7-c124f0bace4e'},
{from: 'b37d26ca-2c0c-480b-842d-93454ea4f690', to: '5c801761-58e7-4838-83f7-c124f0bace4e'},
{from: '5c801761-58e7-4838-83f7-c124f0bace4e', to: '97e02e5b-f823-41c9-9194-1903d7fafb5c'}
                            ]);