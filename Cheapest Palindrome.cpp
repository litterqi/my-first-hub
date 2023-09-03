#include<bits/stdc++.h>
using namespace std;
int cost[26];
int main()
{
    int n,m,j,tmp1,tmp2;
    char p;
    string s;
    cin>>n>>m;
    cin>>s;
    int dp[m][m]={0};
    for(int i=0;i<n;i++)
    {
        cin>>p>>tmp1>>tmp2;
        cost[p-'a']=min(tmp1,tmp2);
    }
    for(int d=2;d<=m;d++)
    {
        for(int i=0;i<=m-d;i++)
        {
            j=i+d-1;
            if(s[i]==s[j])
                dp[i][j]=dp[i+1][j-1];
            else
                dp[i][j]=min(dp[i+1][j]+cost[s[i]-'a'],dp[i][j-1]+cost[s[j]-'a']);    
        }
    }
    cout<<dp[0][m-1];
}