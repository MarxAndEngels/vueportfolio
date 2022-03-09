let dataCode = [
    {
        'id': 1,
         'question': `Подсчитать количество цифр в массиве`,
         'answer':`
    function countNumbers($arr)
    {
      $result;
      foreach($arr as $el){
        if(isset($result[$el])){
            $result[$el]++;
        }else{
            $result[$el] = 1;
        }
    }
    return $result;
    }
    countNumbers([1,3,5,4,4,5,4,5]);`
     },
     {
        'id': 5,
         'question': `Проверить на изограмму - на слово в котором нет повторяющихся букв`,
         'answer':
         `function isIsogram($string) {
            $arr =[];
            $text = strtolower($string);
            $text = str_split($text,1);
            
            foreach($text as $el){
              if(isset($arr[$el])){
                $arr[$el]++;
              }else{
                $arr[$el] = 1;
              }
            }
            
            foreach($arr as $key=>$el){
              if($el > 1){
                return false;
              }
            }
            return true;
          }`
     },
    {
        'id': 2,
         'question': `Найти все простые числа`,
         'answer':`
         function divisors($integer) {
            if($integer > 1){
            $arr = [];
            for($i=2; $i<$integer; $i++){
              if($integer % $i == 0){
              array_push($arr , $i);
            }
              }
             }
            return $arr;
          }`
     },
 {
    'id': 3,
     'question': `Найти лишнее число. Например из массива [1, 1, 2] должно вернуться только 2`,
     'answer':`
     function stray($arr)
     {
      $newarr;
      foreach($arr as $el){
          if(isset($newarr[$el])){
              $newarr[$el]++;
          }else{
               $newarr[$el]=1;
          }
      }
      foreach($newarr as $key=>$el){
         if($el > 1){
             unset($newarr[$key]);
         }
      }
        foreach($newarr as $key=>$el){
          return([$key]);
       }
     }
     stray([1,1,2]);`
 },
 {
    'id': 4,
     'question': `Поменять отрицательное число на положительное`,
     'answer':
     `function invert( $arr)
     {
       for($i=0; $i< count($arr); $i++){
           if($arr[$i] < 0){
                $arr[$i] = (int) str_replace('-' ,'',$arr[$i]);
           }else{
               $arr[$i] = -$arr[$i];
           }
       }
       var_dump($arr);
     }
     stray([-12,22,12]);`
 },
 {
    'id': 6,
     'question': `Задача на повторение строки`,
     'answer':
     `function strRepeat($str)
     {
         $str = str_split($str);
         $newstr = '';
         for($i=0;$i<count($str); $i++){
             $newstr.= str_repeat($str[$i],$i+1).'-';
         }
         return $newstr;
     
     }
     strRepeat('eqwsadasdwqd');`
 },
 {
    'id':7,
    'question': `Передается массив, нужно взять самые максимальные элементы массива в количестве передаваемого $size. И перемножить эти элементы`,
    'answer':`    
    function maxProduct($arr,$size)
    {
        $result=0;
        rsort($arr);
        
        $result = array_splice($arr,0,$size);
        $answer=1;
        foreach($result as $el){
            $answer*=$el;
        }
        echo $answer;
    
    }
    maxProduct([1,3,5,4],3);`
},
 {
    'id':8,
    'question': `Найти факториал числа`,
    'answer':`    
    function factorial(int $n): int {
        if($n === 0 || $n === 1){
          return 1;
        }
        return $n * factorial($n-1);
      }`
}
 
];
export default dataCode;