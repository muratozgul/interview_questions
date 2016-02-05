public boolean isPalindrome(int a) {
      if(a<0) {
          return false;
      } else if (a<10) {
          return true;
      }
      
      int temp = a/100;
      int digits = 2;
      while(temp > 0){
          digits++;
          temp /= 10;
      }
      
      //System.out.println("Digits: " + (int)Math.pow(10,(digits-1)));
      
      while(a > 0) {
          int right = a%10;
          int left = a/((int)Math.pow(10,(digits-1)));
          
          //System.out.println("Left: " + left + ", right: " + right);
          
          if(left != right) {
              return false;
          }
          
          a = a%(int)Math.pow(10, digits-1);
          
          a = a/10;
          
          digits-=2;
          
      }
      
      return true;
  }