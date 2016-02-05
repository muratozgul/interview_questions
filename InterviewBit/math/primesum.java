import java.util.ArrayList;
import java.util.List;

/*
Prime Numbers
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int input = 100;
        
        List<Integer> result = solution.generatePrimesUntil(input);
        System.out.println(result.toString());
        
        input = 4;
        List<Integer> goldbach = solution.primesum(input);
        System.out.println(goldbach.toString());
        
        System.out.println("DONE!");
    }
}

class Solution {
  
  public List<Integer> generatePrimesUntil(int number) {
    if(number < 2) {
      return new ArrayList<Integer>();
    }
    
    boolean[] primes = new boolean[number+1];
    
    //initialize
    for(int i=2; i<primes.length; i++) {
      primes[i] = true;
    }
    
    //filter
    for(int i=2; i<=number; i++) {
      if(primes[i]) {
        for(int j=i+i; j<=number; j+=i) {
          primes[j] = false;
        }
      }
    }
    
    List<Integer> result = new ArrayList<Integer>(number/2);
    
    for(int i=2; i<=number; i++) {
      if(primes[i]) {
        result.add(i);
      }   
    }
    
    return result;
  }
  
  private static List<Integer> cache = new ArrayList<Integer>();
  private static int maxQuerySoFar = 1;
  
  public boolean isPrime(int number) {  
    if(number > maxQuerySoFar) {
      cache = generatePrimesUntil(number);
      maxQuerySoFar = number;
    }
    
    return cache.contains(number);
  }
  
  //goldbachs
  public ArrayList<Integer> primesum(int number) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    
    if(number > maxQuerySoFar) {
      cache = generatePrimesUntil(number);
      maxQuerySoFar = number;
    }
    
    int cacheSize = cache.size();
    
    for(int left=0; left<cacheSize; left++) {
      int right = cacheSize-1;
      
      while(left<=right) {
        int sum = cache.get(left) + cache.get(right); 
        if(sum == number) {
          result.add(cache.get(left));
          result.add(cache.get(right));
          return result;
          
        } else if(sum < number) {
          break;
        }
        right--;
      }
    }
    
    return result;
  }

}












