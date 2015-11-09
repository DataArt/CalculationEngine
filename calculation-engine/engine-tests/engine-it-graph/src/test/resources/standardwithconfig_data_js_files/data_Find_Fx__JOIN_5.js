var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '66f0c2f9-7e98-4614-be9d-53bb43cf5daa', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 66f0c2f9-7e98-4614-be9d-53bb43cf5daa<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: 'dc025766-0ce6-4820-8103-526775b5c6bf', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: dc025766-0ce6-4820-8103-526775b5c6bf<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: 'ef40380e-5e9b-44ed-b6bd-27375b212a12', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: ef40380e-5e9b-44ed-b6bd-27375b212a12<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: '7401d60a-e0b6-40ec-a726-f0db6e89ba4e', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 7401d60a-e0b6-40ec-a726-f0db6e89ba4e<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ef40380e-5e9b-44ed-b6bd-27375b212a12', to: '7401d60a-e0b6-40ec-a726-f0db6e89ba4e'},
{from: 'dc025766-0ce6-4820-8103-526775b5c6bf', to: 'ef40380e-5e9b-44ed-b6bd-27375b212a12'},
{from: '66f0c2f9-7e98-4614-be9d-53bb43cf5daa', to: 'ef40380e-5e9b-44ed-b6bd-27375b212a12'}
                            ]);