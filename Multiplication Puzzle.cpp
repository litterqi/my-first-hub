#include<bits/stdc++.h>
using namespace std;
int card[105];
int dp[105][105];
int main()
{
    int i,j,n;
    cin>>n;
    for(i=0;i<n;i++)
        cin>>card[i];
    for(int d=2;d<=n;d++)//每次计算的区间长度
    {
        for(i=0;i<n-d;i++)//区间的启示位置
        {
            j=i+d-1;//区间的终止位置
            dp[i][j]=INT_MAX;
            for(int k=i;k<j;k++)
                dp[i][j]=min(dp[i][j],dp[i][k]+dp[k+1][j]+card[i]*card[k+1]*card[j+1]);//使用矩阵乘法的性质进行动态规划    
        }
    }
    cout<<dp[0][n-2];
}