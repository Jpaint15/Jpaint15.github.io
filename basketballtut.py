import pandas as pd
pd.options.mode.chained_assignment = None  # default='warn'
import numpy as np

pbp = pd.read_parquet("/Users/aka-shake/itis3135_work/Jpaint15.github.io/pbp.parquet")

pbp = (pbp
       .dropna(subset = ['nameTeam', 'eventGeneral'])
       .fillna(0)
       .assign(home_points_scored = lambda x: np.where(x.nameTeam == x.homeTeam, x.shotResultPoints, 0))
       .assign(away_points_scored = lambda x: np.where(x.nameTeam == x.awayTeam, x.shotResultPoints, 0))
       .assign(foul = lambda x: ["foul" in event for event in x.eventType])
       .assign(home_foul = lambda x: np.where((x.nameTeam == x.homeTeam) & (x.foul == True), 1, 0))
       .assign(away_foul = lambda x: np.where((x.nameTeam == x.awayTeam) & (x.foul == True), 1, 0))
       .assign(time_remaining = lambda x: 2880 - x.gametime)
       .assign(home_score = lambda x: x.groupby(['idGame'])['home_points_scored'].cumsum())
       .assign(away_score = lambda x: x.groupby(['idGame'])['away_points_scored'].cumsum())
       .assign(home_foul_totals = lambda x: x.groupby(['idGame'])['home_foul'].cumsum())
       .assign(away_foul_totals = lambda x: x.groupby(['idGame'])['away_foul'].cumsum())
       .assign(home_margin = lambda x: x.home_score - x.away_score)
)

winner_frame = (pbp
                .groupby('idGame')[['home_score', 'away_score']]
                .max()
                .reset_index()
                .assign(home_win = lambda x: np.where(x.home_score > x.away_score, 1, 0))
                .drop(['home_score', 'away_score'], axis=1))

pbp = pbp.merge(winner_frame, how = "left", on = "idGame")
pbp = pbp[["idGame", "time_remaining", "home_score", "away_score", "home_margin", 
           "home_foul_totals", "away_foul_totals", "home_win"]]

pbp.drop(['idGame'], axis=1).head(10)