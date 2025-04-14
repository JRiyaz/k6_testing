INSTANCE DETAILS:
  Jiva Version              : dev7beta
  jiva_buildout branch      : develop
  No.of Zope Nodes          : 4
  Zope installed in         : 172.27.2.72 (Windows server)
  Apache installed in       : 172.27.2.72 (Windows server)
  MemCached docker setup    : 172.27.4.87 (Linux server)
  Ui_Monorepo docker setup  : 172.27.4.87 (Linux server)
  Redis docker setup        : 172.27.4.87 (Linux server)


********* 2 Hour Test **************

Resource Usage:
  Before Test:
    CPU usage before = less than 20%
    Ram usage before = less than 55% (Nodes were not up)
  During Test:
    CPU usage before = less than 45%
    Ram usage before = less than 80%

Zeo:
  data_received..................: 471 MB
  data_sent......................: 14 MB
  http_req_duration..............: avg=4.37s    min=393.15ms med=1.22s  max=1m0s   p(90)=13.1s   p(95)=17.03s
  http_reqs......................: 13258
  http_req_failed................: 0 (0.00%)
  virtual_users..................: 20
  
ZeoLess:
  data_received..................: 475 MB
  data_sent......................: 15 MB
  http_req_duration..............: avg=4.75s    min=407.22ms med=1.47s  max=58.96s   p(90)=12.21s  p(95)=16.5s
  http_reqs......................: 13459
  http_req_failed................: 0 (0.00%)
  virtual_users..................: 20


MEMCACHE ERRORS:
  2025-04-11 02:13:11,713 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-1] An unexpected error occurred while fetching cache for key DASHBOARD_U26127_nurseworkflow: All servers seem to be down right now
  2025-04-11 02:13:16,464 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-1] An unexpected error occurred while setting cache for key DASHBOARD_U26127_nurseworkflow: All servers seem to be down right now
  2025-04-11 02:13:38,245 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-0] An unexpected error occurred while fetching cache for key DASHBOARD_U26127_careremindernursewidget: All servers seem to be down right now
  2025-04-11 02:13:38,777 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-0] An unexpected error occurred while setting cache for key DASHBOARD_U26127_careremindernursewidget: All servers seem to be down right now
  2025-04-11 02:13:43,261 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-1] An unexpected error occurred while fetching cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:43,339 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-1] An unexpected error occurred while setting cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:44,120 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-1] An unexpected error occurred while fetching cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:44,214 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-1] An unexpected error occurred while setting cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:49,355 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-2] An unexpected error occurred while fetching cache for key DASHBOARD_U26127_myepisodeswithduedtgraph: All servers seem to be down right now
  2025-04-11 02:13:51,824 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-2] An unexpected error occurred while fetching cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:51,902 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-2] An unexpected error occurred while setting cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:53,370 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-2] An unexpected error occurred while setting cache for key DASHBOARD_U26127_myepisodeswithduedtgraph: All servers seem to be down right now
  2025-04-11 02:13:58,292 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-0] An unexpected error occurred while fetching cache for key DASHBOARD_U26127_myepisodeswithoutduedtgraph: All servers seem to be down right now
  2025-04-11 02:13:58,949 ERROR    [jivacore.cache.mem_cacheclient:86][waitress-0] An unexpected error occurred while fetching cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:13:59,027 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-0] An unexpected error occurred while setting cache for key USER_ACCESS_NS_26127: All servers seem to be down right now
  2025-04-11 02:14:02,582 ERROR    [jivacore.cache.mem_cacheclient:115][waitress-0] An unexpected error occurred while setting cache for key DASHBOARD_U26127_myepisodeswithoutduedtgraph: All servers seem to be down right now