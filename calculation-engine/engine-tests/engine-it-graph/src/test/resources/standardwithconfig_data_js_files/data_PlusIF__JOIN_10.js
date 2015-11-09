var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0cca5fda-6bd3-4bc3-858a-c4a91f03c3ea', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 0cca5fda-6bd3-4bc3-858a-c4a91f03c3ea<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'b779e58c-1b50-42f6-a4f4-4403fd9bd8a0', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: b779e58c-1b50-42f6-a4f4-4403fd9bd8a0<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '50f203dc-46f4-4d98-a509-11cb7af3932c', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 50f203dc-46f4-4d98-a509-11cb7af3932c<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '318cd44c-bba9-4ed4-958f-df25d918ff81', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 318cd44c-bba9-4ed4-958f-df25d918ff81<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'f9e22ee4-ea01-4873-8055-92942b2e35c3', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: f9e22ee4-ea01-4873-8055-92942b2e35c3<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '73616c36-809f-4e87-b487-313232499c27', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 73616c36-809f-4e87-b487-313232499c27<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'ad436320-456a-40c7-b068-ee91b623b06a', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: ad436320-456a-40c7-b068-ee91b623b06a<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b779e58c-1b50-42f6-a4f4-4403fd9bd8a0', to: '318cd44c-bba9-4ed4-958f-df25d918ff81'},
{from: '73616c36-809f-4e87-b487-313232499c27', to: '0cca5fda-6bd3-4bc3-858a-c4a91f03c3ea'},
{from: 'f9e22ee4-ea01-4873-8055-92942b2e35c3', to: 'ad436320-456a-40c7-b068-ee91b623b06a'},
{from: 'ad436320-456a-40c7-b068-ee91b623b06a', to: '318cd44c-bba9-4ed4-958f-df25d918ff81'},
{from: '50f203dc-46f4-4d98-a509-11cb7af3932c', to: 'ad436320-456a-40c7-b068-ee91b623b06a'},
{from: '318cd44c-bba9-4ed4-958f-df25d918ff81', to: '73616c36-809f-4e87-b487-313232499c27'}
                            ]);