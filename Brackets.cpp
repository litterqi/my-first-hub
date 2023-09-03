#include<bits/stdc++.h>
using namespace std;
int dp[105][105];
bool match(char a,char b)
{
    if((a=='('&&b==')')||(a=='['&&b==']'))
        return true;
    return false;    
}
int main()
{
    string s;
    int n,j;
    while(1)
    {
        cin>>s;
        if(s=="end")
            return 0;
        n=s.size();    
        memset(dp,0,sizeof(dp));
        for(int d=2;d<=n;d++)
        {
            for(int i=0;i<=n-d;i++)
            {
                j=i+d-1;
                if(match(s[i],s[j]))
                    dp[i][j]=dp[i+1][j-1]+2;
                for(int k=i;k<j;k++)
                    dp[i][j]=max(dp[i][j],dp[i][k]+dp[k+1][j]);    
            }
        }
        cout<<dp[0][n-1]<<endl;
    }
}