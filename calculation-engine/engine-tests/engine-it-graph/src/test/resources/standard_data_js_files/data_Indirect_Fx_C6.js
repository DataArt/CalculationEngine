var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '73f17ff8-d6d4-488c-adac-92dac3db8f48', label: 'INDIRECT\n1.333', color: '#f0ad4e', title: 'Name: INDIRECT<br>Alias: null<br>Value: 1.333<br>Type: FUNCTION<br>Id: 73f17ff8-d6d4-488c-adac-92dac3db8f48<br>Formula Expression: Formula String: INDIRECT(A2); Formula Values: INDIRECT(B2); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'},
{id: '96c11a26-709c-48f6-a6c4-5111eae0adbb', label: 'A2\nB2', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: B2<br>Type: CELL_WITH_VALUE<br>Id: 96c11a26-709c-48f6-a6c4-5111eae0adbb<br>Formula Expression: Formula String: A2; Formula Values: B2; Formula Ptg: B2; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'},
{id: 'cd5a7eac-d57a-4fb3-b480-51ea875a24a5', label: 'C6\n1.333', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 1.333<br>Type: CELL_WITH_FORMULA<br>Id: cd5a7eac-d57a-4fb3-b480-51ea875a24a5<br>Formula Expression: Formula String: INDIRECT(A2); Formula Values: INDIRECT(B2); Formula Ptg: B2 INDIRECT ; Ptgs: A2 INDIRECT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '96c11a26-709c-48f6-a6c4-5111eae0adbb', to: '73f17ff8-d6d4-488c-adac-92dac3db8f48'},
{from: '73f17ff8-d6d4-488c-adac-92dac3db8f48', to: 'cd5a7eac-d57a-4fb3-b480-51ea875a24a5'}
                            ]);