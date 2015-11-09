var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '31ec78c6-4159-4fee-80ff-08df9fbd2856', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 31ec78c6-4159-4fee-80ff-08df9fbd2856<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '379a6551-049f-44c9-a090-ce15784aa037', label: 'E6\n[[6.0]]', color: '#31b0d5', title: 'Name: E6<br>Value: [[6.0]]<br>Type: CELL_WITH_FORMULA<br>Id: 379a6551-049f-44c9-a090-ce15784aa037<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: 2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0 INDEX ; Ptgs: VALUE, VALUE, A1:C4 INDEX  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '8c7cb244-96b4-4564-80bc-d5113719c053', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]<br>Type: RANGE<br>Id: 8c7cb244-96b4-4564-80bc-d5113719c053<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Formula Ptg: [[Apples, Lemons, 7.0], [Bananas, Pears, u], [67.0, 6.0, u], [9.0, 98.0, 98.0]]; Ptgs: A1:C4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '08c10167-8bbc-4ce8-8991-30a51048bc8b', label: 'INDEX\n[[6.0]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[6.0]]<br>Type: FUNCTION<br>Id: 08c10167-8bbc-4ce8-8991-30a51048bc8b<br>Formula Expression: Formula String: INDEX(VALUE, VALUE, A1:C4); Formula Values: INDEX(2.0, 3.0, Apples, Lemons, 7.0, Bananas, Pears, u, 67.0, 6.0, u, 9.0, 98.0, 98.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'},
{id: '5d6b2ade-3189-467e-a861-dd4fb0e7b465', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 5d6b2ade-3189-467e-a861-dd4fb0e7b465<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c72ffa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5d6b2ade-3189-467e-a861-dd4fb0e7b465', to: '08c10167-8bbc-4ce8-8991-30a51048bc8b'},
{from: '31ec78c6-4159-4fee-80ff-08df9fbd2856', to: '08c10167-8bbc-4ce8-8991-30a51048bc8b'},
{from: '08c10167-8bbc-4ce8-8991-30a51048bc8b', to: '379a6551-049f-44c9-a090-ce15784aa037'},
{from: '8c7cb244-96b4-4564-80bc-d5113719c053', to: '08c10167-8bbc-4ce8-8991-30a51048bc8b'}
                            ]);